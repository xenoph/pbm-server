import { ManagementClient } from 'auth0';

var auth0 = new ManagementClient({
	domain: `${process.env.AUTH0_TENANT}.auth0.com`,
	clientId: `${process.env.AUTH0_CLIENT_ID}`,
	clientSecret: `${process.env.AUTH0_CLIENT_SECRET}`,
	scope: 'read:users update:users',
});

export default auth0;
