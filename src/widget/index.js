// Chatbot Widget Entry Point
import { initChatbot } from './components/Chatbot.js';

window.EcomChatbot = {
    init: (config) => {
        initChatbot(config);
    }
};
