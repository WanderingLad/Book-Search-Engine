const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        savedBooks: [Book!]
    }

    type Book {
        _id: ID!
        authors: [String!]!
        description: String!
        bookId: String!
        image: String
        link: String
        title: String! 
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        singleUser(username: String!): User
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): User
        saveBook(username: String!, bookID: String!):User
        login(email: String!, password: String!): Auth
        deleteBook(bookId: String!): User
    }
`;

module.exports = typeDefs;