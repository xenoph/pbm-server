import path from 'path';
import express from 'express';


/**
 * This sets up the static routes, used to serve the react web app.
 * 
 * @param {*} app 
 */
export function RegisterStatic(app) {
	app.use('/', express.static('build/web'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve('build/web', 'index.html'));
	});
}
