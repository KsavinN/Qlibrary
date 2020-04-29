const { gql } = require('apollo-server');

const typeDefs = gql`

    schema {
        query: Query
    }

    type Query {
        authors: [Author!]!
        books: [Book!]!
        users: [User!]!
        randomBook: Book!
        randomAuthor: Author!
        randomUser: User!
    }

    type Author {
        name: String!
        photo: Image!
        books: [Book!]
    }

    type Book { 
        title: String!
        cover: Image!
        author: Author!
        users: [User!]!
    }

    type User {
        name: String!
        email: String!
        avatar: Avatar!
        books: [Book!]!
    }

    type Image {
        url: String!
    }

    type Avatar {
        image: Image!
        color: String!
    }
`;

module.exports = typeDefs;