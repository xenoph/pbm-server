import jwt from 'jsonwebtoken';
import JWKSClient from 'jwks-rsa';

const jwksClient = JWKSClient({
	jwksUri: `https://${process.env.PUBLIC_AUTH0_DOMAIN}/.well-known/jwks.json`,
});

function getJWKSKey(header, callback) {
	jwksClient.getSigningKey(header.kid, (err, key) => {
		let signingKey = key.publicKey || key.rsaPublicKey;

		callback(null, signingKey);
	});
}

const jwtOptions = {
	audience: process.env.PUBLIC_AUTH0_CLIENT_ID,
	issuer: `https://${process.env.PUBLIC_AUTH0_DOMAIN}/`,
	algorithms: ['RS256'],
};

const auth = {
	getUserFromToken: async token => {
		return await new Promise((resolve, reject) =>
			jwt.verify(token, getJWKSKey, jwtOptions, (error, decoded) => {
				resolve(decoded || null);
			})
		);
	},
};

export default auth;
