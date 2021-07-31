import { ApolloServer } from 'apollo-server-express';

import auth from 'server/config/auth';
import schema from 'server/graphql.schema';

/**
 * This starts and sets up the  graphql endpoint
 *
 * @param {*} app
 * @param {*} context
 */
export function RegisterGraphQL(app, context) {
	const apolloServer = new ApolloServer({
		schema,
		introspection: true,
		playground: true,
		formatError: error => {
			Error.captureStackTrace(error);

			console.error(error);

			return error;
		},
		context: async ({ req }) => {
			const token = (req.header('Authorization') || '').replace('Bearer ', '');
			let user = null;

			if (token) {
				try {
					user = await auth.getUserFromToken(token);
				} catch (error) {
					console.error(error);
				}
			}

			return {
				user,
				...context,
			};
		},
	});

	apolloServer.applyMiddleware({ app });
}
