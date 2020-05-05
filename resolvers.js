
const resolvers = {
    Query: {
        users: (rootValue, arg, { db }) => db.getAllUsers(),
        books: (rootValue, arg, { db }) => db.getAllBooks(),
        authors: (rootValue,arg, { db }) => db.getAllAuthors(),
        randomBook: (rootValue,arg, { db }) => db.getBookById(db.getRandomIndexProperty("books")),
        randomAuthor: (rootValue,arg, { db }) => db.getAuthorById(db.getRandomIndexProperty("authors")),
        randomUser: (rootValue,arg, { db }) => db.getUserById(db.getRandomIndexProperty("users"))
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
