import React from 'react';
import { render } from 'react-dom';

import App from 'web/App';
import Providers from 'web/Providers';

render(
    <Providers>
        <App />
    </Providers>,
    document.getElementById('app-root')
);
