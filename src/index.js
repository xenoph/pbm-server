import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const app = express();

const schema = gql`
    type Query {
        me: User
    }

    type User {
        username: String!
    }
`;
const resolvers = {
    Query: {
        me: () => {
            return {
                username: 'Bjørn Vidar Dahle',
            };
        },
    },
};

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 4000 }, () => {
    console.log('Apollo Server on http://localhost:4000/graphql');
});
