const { gql } = require('apollo-server-express');

export const SINGLEUSER = gql`
    {
        singleUser {
            _id
            username
            email
            password
            savedBooks {
                title
                bookId
                authors
                description
                image
                link
            }
        }
    }
`;