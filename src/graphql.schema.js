const { transpileSchema } = require('graphql-s2s').graphqls2s;
import { makeExecutableSchema } from 'graphql-tools';
import { GraphQLScalarType } from 'graphql';
import merge from 'lodash/merge';

import TeamModule from './graphql/Team.module';

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

const baseTypeDefs = `
	scalar DateTime
	scalar JSON

	directive @auth(
		resource: String,
	) on OBJECT | FIELD_DEFINITION
	
	type Document {
		_id: ID
		createdAt: DateTime
		createdBy: ID
		createdByDisplayName: String
		updatedAt: DateTime
		updatedBy: ID
		updatedByDisplayName: String
		deletedAt: DateTime
		deletedBy: ID
		deletedByDisplayName: String
	}
	
	type Find<T> {
		items: [T]
		count: Int
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
    typeDefs: transpileSchema(baseTypeDefs + TeamModule.typeDefs + ''),
    resolvers: merge(baseResolvers, TeamModule.resolvers),
});

export default schema;
