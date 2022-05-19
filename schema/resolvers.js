

const { userList } = require('./data')

const resolvers = {
    Query: {
        users() {
            return userList
        }
    }
}

module.exports = {resolvers} 