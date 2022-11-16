'use client'

import React, { FC, useState } from 'react';
import { HeroBlock } from '@/components/screens/home/components/Blocks/HeroBlock';
import { TelegramBlock } from '@/components/screens/home/components/Blocks/TelegramBlock';
import { Footer } from '@/components/Footer';
import { DownloadBlock } from '@/components/screens/home/components/Blocks/DownloadBlock';
import { SliderBlock } from '@/components/screens/home/components/Blocks/SliderBlock';
import { SOLDRAdvantages } from '../../../config/SOLDR';
import { AdvantagePopup } from '@/components/screens/home/components/AdvantagePopup';

export type HomeScreenProps = {
}

export const HomeScreen: FC<HomeScreenProps> = (props) => {
    const {} = props;

    const [selectedAdvantage, setSelectedAdvantage] = useState<SOLDRAdvantages>();

    return (
        <>
            <HeroBlock />

            <SliderBlock onSelectAdvantage={setSelectedAdvantage} />

            <TelegramBlock className={'mt-[72px] medium:mt-[64px] small:mt-[72px] mobile:mt-[80px]'} />

            <DownloadBlock className={'mt-[72px] medium:mt-[64px] small:mt-[72px] mobile:mt-[80px]'} />

            <Footer className={'bg-panel'} />

            {selectedAdvantage !== undefined && (
                <AdvantagePopup advantage={selectedAdvantage} onClose={() => setSelectedAdvantage(undefined)} />
            )}
        </>
    );
}
