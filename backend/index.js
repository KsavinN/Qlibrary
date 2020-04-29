const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const rootValue = require('./rootValue');
const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
    rootValue,
    typeDefs,
    introspection: true,
    playground: true
});

server.listen({ port: PORT }).then(({ url }) => {
    console.log(`Servers run at ${url}`);
});