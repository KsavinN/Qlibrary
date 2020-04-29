const db = require("./db");

const resolvers = {
    Query: {
        users: (rootValue, arg, { db }) => db.getAllUsers(),
        books: (rootValue, arg, { db }) => db.getAllBooks(),
        authors: (rootValue,arg, { db }) =>db.getAllAuthors(),
        randomBook: () => db.getRandomProperty("books"),
        randomAuthor: () => db.getRandomProperty("authors"),
        randomUser: () => db.getRandomProperty("users")
    },
    Book: {
        author: (book, arg, { db }) => db.getAuthorById(book.authorId),
        users: (book, arg, { db }) => book.usersId.map(db.getUserById) ,
        cover: book => ({ path: book.coverPath })
    },
    Author: {
        books: (author, arg , { db }) => author.bookIds.map(db.getBookById),
        photo: author => ({path: author.photoPath})
    },
    User: {
        books: (user, arg , { db } ) => user.bookIds.map(db.getBookById)
    },
    Avatar: {
        image: avatar => ({path: avatar.pathAvatar })    
    },
    Image: {
        url: (image,args,{prefixUrlBase}) => prefixUrlBase + image.path 
    },
  
};

module.exports = resolvers;
