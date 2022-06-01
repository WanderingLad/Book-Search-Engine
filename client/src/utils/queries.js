const { gql } = require('@apollo/client');

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