import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import setupMongodbClient from './schema/settings/mongodb';

import schema from './graphql.schema';

const app = express();
app.use(cors());

const setup = async () => {
    const mongodb = await setupMongodbClient();
    const server = new ApolloServer({
        schema,
        context: async () => {
            return {
                ...mongodb,
            };
        },
    });

    server.applyMiddleware({ app, path: '/graphql' });

    await app.listen({ port: 4000 }, () => {
        console.log('Apollo Server on http://localhost:4000/graphql');
    });
};

setup();

module.exports = app;
