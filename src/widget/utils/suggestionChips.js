/**
 * Pick suggestion chips relevant to the bot's response text (or product context).
 * Returns only chips that match the message; no pills when nothing is relevant (e.g. checkout/OTP flow).
 * @param {string} responseText - Bot message or concatenated product titles
 * @param {string[]} allChips - Full list from config
 * @param {number} max - Max chips to return
 * @returns {string[]}
 */
export function getRelevantSuggestionChips(responseText, allChips = [], max = 4) {
    if (!allChips || allChips.length === 0) return [];
    const text = (responseText || '').toLowerCase();
    const scored = allChips.map((label) => {
        const lower = label.toLowerCase();
        let score = 0;
        const words = lower.split(/\s+/).filter((w) => w.length > 2);
        for (const word of words) {
            if (text.includes(word)) score += 2;
            if (text.includes(word.replace(/[^a-z0-9]/g, ''))) score += 1;
        }
        if (label.toLowerCase().includes('sneaker') && (text.includes('sneaker') || text.includes('shoe'))) score += 3;
        if (label.toLowerCase().includes('trending') && (text.includes('trending') || text.includes('bestseller') || text.includes('popular'))) score += 3;
        if (label.toLowerCase().includes('sale') && (text.includes('sale') || text.includes('price') || text.includes('$'))) score += 2;
        if (label.toLowerCase().includes('running') && text.includes('running')) score += 3;
        if (label.toLowerCase().includes('jacket') && (text.includes('jacket') || text.includes('apparel'))) score += 2;
        return { label, score };
    });
    scored.sort((a, b) => b.score - a.score);
    // Only return chips with score > 0 — never pad with irrelevant pills (e.g. during checkout/OTP)
    return scored.filter((s) => s.score > 0).slice(0, max).map((s) => s.label);
}
