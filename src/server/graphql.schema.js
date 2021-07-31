const { transpileSchema } = require('graphql-s2s').graphqls2s;
import { makeExecutableSchema } from 'graphql-tools';
import { GraphQLScalarType } from 'graphql';
import merge from 'lodash/merge';
import JSONScalar from 'graphql-type-json';

import TeamsModule from 'server/graphql/modules/Teams.module';

export const DateTime = new GraphQLScalarType({
    name: 'DateTime',
    description: 'Resolves to javascript date object',
    serialize(value) {
        return (value && new Date(value)) || null;
    },
    parseValue(value) {
        return new Date(value);
    },
    parseLiteral(ast) {
        return new Date(ast.value);
    },
});

const API_VERSION = '0.0.1';

const baseTypeDefs = /* GraphQL */ `
directive @auth(scope: String) on OBJECT | FIELD_DEFINITION
directive @roles(roles: [String]) onN OBJECT | FIELD_DEFINITIO

scalar JSON
scalar DateTime

type Paginate<T> {
	items: [T]
    count: Int
}

input DateQueryInput {
	gt: DateTime
	lt: DateTime
}

type Document {
    _id: ID
    createdAt: DateTime
    updatedAt: DateTime
	createdBy: ID
	createdByDisplayName: String
	updatedBy: ID
	updatedByDisplayName: String
}

type Query {
    apiVersion: String!
}

type Mutation {
    checkTime: String!
}
`;

const baseResolvers = {
    Query: {
        apiVersion: (_, args, context) => {
            const { user } = context;

            console.log(user);

            return API_VERSION;
        },
    },
    Mutation: {
        checkTime: () => new Date(),
    },
};

const schema = makeExecutableSchema({
    typeDefs: transpileSchema(baseTypeDefs + TeamsModule.typeDefs + ''),
    resolvers: merge(baseResolvers, TeamsModule.resolvers, {
        JSON: JSONScalar,
        DateTime,
    }),
    schemaDirectives: {
        auth: AuthDirective,
    },
});

export default schema;
