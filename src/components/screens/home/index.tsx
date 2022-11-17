'use client'

import React, { FC, useState } from 'react';
import { HeroBlock } from './components/Blocks/HeroBlock';
import { TelegramBlock } from './components/Blocks/TelegramBlock';
import { Footer } from '../../Footer';
import { DownloadBlock } from './components/Blocks/DownloadBlock';
import { SliderBlock } from './components/Blocks/SliderBlock';
import { SOLDRAdvantages } from '../../../config/SOLDR';
import { AdvantagePopup } from './components/AdvantagePopup';
import Head from 'next/head';

export type HomeScreenProps = {
    title: string;
    description: string;
}

export const HomeScreen: FC<HomeScreenProps> = (props) => {
    const { title, description } = props;

    const [selectedAdvantage, setSelectedAdvantage] = useState<SOLDRAdvantages>();

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>

            <HeroBlock />

            <SliderBlock onSelectAdvantage={setSelectedAdvantage} className={'mt-[80px] medium:mt-[40px] small:mt-[40px] mobile:mt-[20px]'} />

            <TelegramBlock className={'mt-[72px] medium:mt-[64px] small:mt-[72px] mobile:mt-[80px]'} />

            <DownloadBlock className={'mt-[72px] medium:mt-[64px] small:mt-[72px] mobile:mt-[80px]'} />

            <Footer className={'bg-panel'} />

            {selectedAdvantage !== undefined && (
                <AdvantagePopup advantage={selectedAdvantage} onClose={() => setSelectedAdvantage(undefined)} />
            )}
        </>
    );
}
