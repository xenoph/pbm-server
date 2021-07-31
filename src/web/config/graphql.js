import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import auth0 from 'web/config/auth0';

const httpLink = createHttpLink({
	uri: '/graphql',
});

const authLink = setContext(async (_, { headers }) => {
	const accessToken = await auth0.getIdTokenClaims();

	return {
		headers: {
			...headers,
			authorization: accessToken ? `Bearer ${accessToken.__raw}` : "",
		}
	}
});

const apolloClient = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
});

export default apolloClient;
