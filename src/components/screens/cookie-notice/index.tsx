import React, { FC } from 'react';
import Head from 'next/head';

export type CookieNoticeScreenProps = {
    title: string;
    description: string;
}

export const CookieNoticeScreen: FC<CookieNoticeScreenProps> = (props) => {
    const { title, description } = props;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>

            <h1>CookieNoticePage</h1>
        </>
    );
}
