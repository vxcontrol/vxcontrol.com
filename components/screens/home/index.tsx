import React, { FC } from 'react';
import { HeroBlock } from '@/components/screens/home/components/Blocks/HeroBlock';
import { TelegramBlock } from '@/components/screens/home/components/Blocks/TelegramBlock';
import { Footer } from '@/components/Footer';

export type HomeScreenProps = {
}

export const HomeScreen: FC<HomeScreenProps> = (props) => {
    const {} = props;

    return (
        <>
            <HeroBlock />

            <TelegramBlock className={'mt-[72px] medium:mt-[64px] small:mt-[72px] mobile:mt-[80px]'} />

            <Footer className={'bg-panel mt-[72px] medium:mt-[64px] small:mt-[72px] mobile:mt-[80px]'} />
        </>
    );
}
