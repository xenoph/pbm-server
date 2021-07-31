import '@babel/polyfill';

import path from 'path';
import cors from 'cors';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

import getStaticContext from 'server/config/context';

import { RegisterGraphQL } from 'server/routers/graphql';
import { RegisterEnv } from 'server/routers/env';
import { RegisterStatic } from 'server/routers/static';

const PORT = process.env.SERVER_PORT || process.env.PORT || 4000;

async function StartServer() {
    const app = express();
    const context = await getStaticContext();

    app.use(logger('dev'));
    app.use(
        cors({
            origin: '*',
            credentials: true,
        })
    );
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    if (process.env.FORCE_HTTPS == 'true') {
        app.enable('trust proxy');
        app.use((req, res, next) => {
            if (req.secure) {
                next();
            } else {
                res.redirect('https://' + req.headers.host + req.url);
            }
        });
    }

    RegisterEnv(app, context);
    RegisterGraphQL(app, context);
    RegisterStatic(app, context);

    return await new Promise(resolve => app.listen(PORT, () => resolve(app)));
}

StartServer().then(app => {
    console.log(`Server started at http://localhost:${PORT}`);
    //console.log(`GraphQL           http://localhost:${PORT}/graphql`);
});
