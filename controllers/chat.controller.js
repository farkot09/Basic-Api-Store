const store = require('../store/chat.store');

const addChat = (users) => {
    if(!users || !Array.isArray(users)) {
        return Promise.reject("Invalid User list")
    }
    const chat = {
        users: users,
    }
    return store.add(chat)
}

const listChats = (userId) => {
    return store.list(userId)
}

module.exports = {
    addChat,
    listChats
}