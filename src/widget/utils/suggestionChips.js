/**
 * Pick suggestion chips relevant to the bot's response text (or product context).
 * Always returns at least a few chips for general replies so the user has next actions.
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
    const relevant = scored.filter((s) => s.score > 0).slice(0, max).map((s) => s.label);
    // Always show at least 2–3 chips below bot messages so user has clear next actions (e.g. "Tell me about your store" reply)
    if (relevant.length === 0 && text.length < 500) {
        return allChips.slice(0, Math.min(3, max));
    }
    return relevant;
}
