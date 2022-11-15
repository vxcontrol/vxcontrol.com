import React, { FC } from 'react';
import { HeroBlock } from '@/components/screens/home/components/Blocks/HeroBlock';

export type HomeScreenProps = {
}

export const HomeScreen: FC<HomeScreenProps> = (props) => {
    const {} = props;

    return (
        <>
            <HeroBlock />
        </>
    );
}
