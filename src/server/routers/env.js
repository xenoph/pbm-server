/**
 * This sets up and serves the env.js "file" so that we can have hotswappable public env`s in the react web app.
 *
 * @param {*} app
 * @param {*} context
 */
export function RegisterEnv(app, context) {
	app.get('/env.js', async (req, res) => {
		let safeEnv = {};

		Object.keys(process.env).forEach(key => {
			if (key.indexOf('PUBLIC_') !== 0) {
				return;
			}

			safeEnv[key] = process.env[key];
		});

		res.set({
			'Cache-Control': 'no-cache',
		});

		res.send(`
			window.env = ${JSON.stringify(safeEnv)};
		`);
	});
}
