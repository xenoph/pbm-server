import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import schema from './src/graphql.schema';

const app = express();
app.use(cors());

const server = new ApolloServer({
    schema,
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: process.env.PORT || 4000 }, () => {
    console.log('Apollo Server on http://localhost:4000/graphql');
});
