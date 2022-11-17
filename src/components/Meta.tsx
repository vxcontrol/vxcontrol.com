import React, { FC } from 'react';
import Head from 'next/head';

const OG_IMAGE_URL = '/images/vxcontrol_og.png';
const URL = { ru: 'https://vxcontrol.ru', en: 'https://vxcontrol.com' };

export interface MetaProps {
    locale: string;
    title: string;
    description: string;
    siteName: string;
}

export const Meta: FC<MetaProps> = (props) => {
    const { locale, title, description, siteName } = props;

    return (
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width" />

            <title>{title}</title>
            <meta name="description" content={description} />

            <meta property="og:type" content={'website'} />
            <meta property="og:url" content={URL[locale]} />
            <meta property="og:image" content={OG_IMAGE_URL} />

            <meta property="og:locale" content={locale} />
            <meta property="og:site_name" content={siteName} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content={'1200'} />
            <meta property="og:image:height" content={'630'} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:url" content={title} />
            <meta name="twitter:image" content={OG_IMAGE_URL} />

            <link rel="icon" href="/favicons/icon.svg" type="image/svg+xml" />
        </Head>
    )
}
