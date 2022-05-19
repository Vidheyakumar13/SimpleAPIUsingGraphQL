
const { userList } = require('./data')
const _ = require('lodash')

const resolvers = {
    Query: {
        users: () => {
            return userList
        },
        user: (parent, args) => {
            const id = args.id;
            const user = _.find(userList, {id: Number(id)})
            return user;
        },
    }
}

module.exports = {resolvers} 