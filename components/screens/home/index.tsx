import React, { FC } from 'react';
import Link from 'next/link';

export type HomeScreenProps = {
}

export const HomeScreen: FC<HomeScreenProps> = (props) => {
    const {} = props;

    return (
        <>
            <h1>Platform for Everyone</h1>

            <Link href={'/cookie-notice'}>
                link to CookieNoticePage
            </Link>
        </>
    );
}
