export async function getAIResponse(message, history = [], onToken, onData, onDone, sessionId = 'default', onStatus = null, onCart = null, onOrderHistory = null, apiBaseUrl = null) {
    // Empty string = same-origin (production). Non-empty = that base (e.g. http://localhost:3000 for dev).
    const base = (apiBaseUrl !== undefined && apiBaseUrl !== null && apiBaseUrl !== '')
        ? String(apiBaseUrl).replace(/\/$/, '')
        : '';
    const url = base ? `${base}/api/chat` : '/api/chat';
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message, history, sessionId })
        });

        if (!response.ok) {
            const errText = await response.text();
            console.error("AI API error", response.status, errText);
            throw new Error(response.status === 503 ? "Backend not configured (missing API key)." : `API ${response.status}`);
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        let buffer = "";

        while (true) {
            const { value, done } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });

            const lines = buffer.split('\n');
            buffer = lines.pop(); // Keep incomplete lines in buffer

            for (const line of lines) {
                if (line.startsWith('data: ')) {
                    const dataStr = line.replace('data: ', '').trim();
                    try {
                        if (dataStr) {
                            const parsed = JSON.parse(dataStr);
                            if (parsed.type === 'text' && onToken) onToken(parsed.content);
                            if (parsed.type === 'carousel' && onData) onData(parsed.content);
                            if (parsed.type === 'cart' && onCart) onCart(parsed.content);
                            if (parsed.type === 'orderHistory' && onOrderHistory) onOrderHistory(parsed.content);
                            if (parsed.type === 'status' && onStatus) onStatus(parsed.content);
                            if (parsed.type === 'done' && onDone) onDone();
                        }
                    } catch (e) { }
                }
            }
        }

    } catch (error) {
        console.error("AI Service Error:", error);
        const message = error?.message?.includes("API key") || error?.message?.includes("503")
            ? "Chat is unavailable. The server needs an API key (check deployment settings)."
            : "My neural network is temporarily offline. Please try again.";
        if (onToken) onToken(message);
        if (onDone) onDone();
    }
}
