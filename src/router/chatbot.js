const ChatbotRouter = [
    {
        path: '/chatbot',
        name: 'Chatbot',
        component: () => import('../views/chatbot/ChatbotView.vue')
    },
];

export default ChatbotRouter;