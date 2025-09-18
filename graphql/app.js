const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const { authenticateTokenGraphQL } = require('./auth');

const app = express();
app.use(express.json());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => authenticateTokenGraphQL(req)
});

async function startApollo() {
  await server.start();
  server.applyMiddleware({ app });
}

startApollo();

module.exports = app;
