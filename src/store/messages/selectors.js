export function messageListSelector(chatId) {
    return state => state.messages.messageList[chatId];
}
