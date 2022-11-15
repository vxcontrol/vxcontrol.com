import React, { FC } from 'react';
import SOLDRIcon from './assets/SOLDR.svg';

export type HeroBlockProps = {}

export const HeroBlock: FC<HeroBlockProps> = (props) => {
    const {} = props;

    return (
        <section className={'mx-auto max-w-[1440px] min-w-[414px]'}>
            <div className={'p-[80px] sm:p-[40px] tablet:p-[40px] mobile:p-[20px]'}>
                <SOLDRIcon className={'w-full h-full'} />
            </div>
        </section>
    )
}

