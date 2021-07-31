import React, { Suspense } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router } from 'react-router-dom';

const client = new ApolloClient({
    uri: `${process.env.REACT_APP_API_BASE_URL}/graphql`,
});

export default function Providers({ children }) {
    return (
        <ApolloProvider client={client}>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Router>{children}</Router>
            </Suspense>
        </ApolloProvider>
    );
}
