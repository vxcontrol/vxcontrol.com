import React, { FC } from 'react';
import SOLDRIcon from '../assets/SOLDR.svg';
import { LocaleLink } from '@/components/screens/home/components/LocaleLink';

export type HeroBlockProps = {}

export const HeroBlock: FC<HeroBlockProps> = (props) => {
    const {} = props;

    return (
        <>
            <section className={'container py-[80px] medium:py-[40px] small:py-[40px] mobile:py-[20px]'}>
                <SOLDRIcon className={'w-full h-full'} />
            </section>

            <section className={'container'}>
                <div className={'grid grid-rows-2 grid-cols-3 flex-col small:flex mobile:flex'}>
                    <div className={'row-span-2 row-start-1 col-start-3 flex justify-end items-baseline gap-2 small:justify-start small:mb-[32px] mobile::justify-start mobile:mb-[20px]'}>
                        <LocaleLink locale={'ru'} className={'mobile:w-full text-center'} />
                        <LocaleLink locale={'en'} className={'mobile:w-full text-center'} />
                    </div>
                    <h1 className={'col-span-2 flex flex-col text-h-base mb-8 large:text-h-medium medium:text-h-medium small:text-h-medium mobile:text-h-small mobile:mb-4'}>
                        System of Orchestration Lifecycle Control Detection and Response
                    </h1>
                    <div className={'col-span-2 text-t-base text-main-light-gray large:text-t-medium medium:text-t-medium small:text-t-x-medium mobile:text-t-x-medium'}>
                        Первое российское решение класса EDR с открытым исходным кодом. Новый подход к защите конечных устройств и молниеносная реакция на угрозы.
                    </div>
                </div>
            </section>
        </>
    )
}

