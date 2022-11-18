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
            <Html lang={this.props.locale}>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width" />
                </Head>
                <body>
                    <Main />
                    <NextScript />

                    <script type="text/javascript" dangerouslySetInnerHTML={{
                        __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");ym(91183581, "init", {clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});`
                    }}>
                    </script>

                    <noscript>
                        <div>
                            <img src="https://mc.yandex.ru/watch/91183581" style={{ position: 'absolute', left: '-9999px' }} alt="" />
                        </div>
                    </noscript>
                </body>
            </Html>
        );
    }
}
