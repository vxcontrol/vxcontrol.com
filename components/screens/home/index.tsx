import React, { FC } from 'react';
import { HeroBlock } from '@/components/screens/home/components/Blocks/HeroBlock';
import { TelegramBlock } from '@/components/screens/home/components/Blocks/TelegramBlock';
import { Footer } from '@/components/Footer';
import { DownloadBlock } from '@/components/screens/home/components/Blocks/DownloadBlock';

export type HomeScreenProps = {
}

export const HomeScreen: FC<HomeScreenProps> = (props) => {
    const {} = props;

    return (
        <>
            <HeroBlock />

            <TelegramBlock className={'mt-[72px] medium:mt-[64px] small:mt-[72px] mobile:mt-[80px]'} />

            <DownloadBlock className={'mt-[72px] medium:mt-[64px] small:mt-[72px] mobile:mt-[80px]'} />

            <Footer className={'bg-panel'} />
        </>
    );
}
