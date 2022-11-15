import React, { FC } from 'react';
import Link from 'next/link';
import { HeroBlock } from '@/components/screens/home/components/HeroBlock';

export type HomeScreenProps = {
}

export const HomeScreen: FC<HomeScreenProps> = (props) => {
    const {} = props;

    return (
        <>
            <HeroBlock />

            <Link href={'/cookie-notice'}>
                link to CookieNoticePage
            </Link>
        </>
    );
}
