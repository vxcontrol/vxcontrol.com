import type { DocumentContext } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

const isProd = process.env.NODE_ENV === 'production';

export default class AppDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="ru">
                <Head>
                    <title>SOLDR — новый подход к защите конечных устройств</title>

                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width" />
                    <meta name="description" content="System of Orchestration, Lifecycle Сontrol, Detection and Response — первое российское решение класса EDR с открытым исходным кодом" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="" />
                    <meta property="og:image" content="" />

                    <link rel="icon" href="/favicons/icon.svg" type="image/svg+xml" />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}
