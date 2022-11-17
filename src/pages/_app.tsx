import '../styles/common.scss';

import type { AppProps } from 'next/app';
import { CookieNotice } from '../components/CookieNotice';
import React from 'react';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Component {...pageProps} />

            <CookieNotice />
        </>
    );
};

export default App;
