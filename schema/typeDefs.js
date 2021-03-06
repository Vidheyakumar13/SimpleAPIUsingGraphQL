const { gql } = require('apollo-server')

const typeDefs = gql`
    type User{
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality! 
        position: String!
        

    }

    type Query{
        users: [User!]! 
        user(id: ID!) : User!

    }

    input CreateNewUserInput{
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    position: String!
    }

    type Mutation{
        createUser(input: CreateNewUserInput!) : User!
    }
    enum Nationality{
    London
    US
    Spain
    Italian
    India
    }
    
    
`;

module.exports = {typeDefs}