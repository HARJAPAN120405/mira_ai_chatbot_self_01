const defaultApiBase = "http://localhost:3000";

export async function getAIResponse(message, history = [], onToken, onData, onDone, sessionId = 'default', onStatus = null, onCart = null, onOrderHistory = null, apiBaseUrl = null) {
    const base = (apiBaseUrl || defaultApiBase).replace(/\/$/, '');
    const url = `${base}/api/chat`;
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message, history, sessionId })
        });

        if (!response.ok) throw new Error();

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
        if (onToken) onToken("My neural network is temporarily offline.");
        if (onDone) onDone();
    }
}
