const db = require("./db");

const resolvers = {
    Query: {
        users: parent => {
          console.log("Query's parent", parent);
          return parent.users;
        },
        randomBook: () => db.getRandomProperty("books"),
        randomAuthor: () => db.getRandomProperty("authors"),
        randomUser: () => db.getRandomProperty("users")
    },
    Book: {
        title: parent => parent.title.toUpperCase(),
        author: parent => db.getAuthorById(parent.authorId),
        cover: book => ({ path: book.coverPath })
    },
    Author: {
        books: author => author.bookIds.map(db.getBookById),
        photo: author => ({path: author.photoPath})
    },
    Avatar: {
        image: avatar => ({path: avatar.pathAvatar })    
    },
    Image: {
        url: (image,args,{prefixUrlBase}) => prefixUrlBase + image.path 
    },
  
};

module.exports = resolvers;
