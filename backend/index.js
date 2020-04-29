const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const rootValue = require('./rootValue');
const resolvers = require('./resolvers');
const db = require('./db');
const PORT = process.env.PORT || 4000;
const PrefixUrlBase = process.env.PrefixUrlBase || 'http://examples.devmastery.pl/';


const server = new ApolloServer({
    rootValue,
    resolvers,
    typeDefs,
    context: {
        prefixUrlBase : PrefixUrlBase
    },
    introspection: true,
    playground: true
});

server.listen({ port: PORT }).then(({ url }) => {
    console.log(`Servers run at ${url}`);
});