import React, { FC } from 'react';
import SOLDRIcon from '../assets/SOLDR.svg';
import { LocaleLink } from '../LocaleLink';
import useTranslation from 'next-translate/useTranslation';

export type HeroBlockProps = {}

export const HeroBlock: FC<HeroBlockProps> = (props) => {
    const {} = props;

    const { t } = useTranslation('home');

    return (
        <>
            <section className={'container py-[80px] medium:py-[40px] small:py-[40px] mobile:py-[20px]'}>
                <SOLDRIcon className={'w-full h-full'} />
            </section>

            <section className={'container'}>
                <div className={'grid grid-rows-[minmax(0,_auto)_minmax(0,_auto)] grid-cols-3 flex-col small:flex mobile:flex'}>
                    <div className={'row-span-2 row-start-1 col-start-3 flex justify-end items-baseline gap-2 small:justify-start small:mb-[32px] mobile::justify-start mobile:mb-[20px]'}>
                        <LocaleLink locale={'ru'} className={'mobile:w-full text-center'} />
                        <LocaleLink locale={'en'} className={'mobile:w-full text-center'} />
                    </div>
                    <h1 className={'col-span-2 flex flex-col text-h-base mb-8 large:text-h-medium medium:text-h-medium small:text-h-medium mobile:text-h-small mobile:mb-4'}>
                        {t('hero_title')}
                    </h1>
                    <div
                        className={'col-span-2 text-t-base text-main-light-gray large:text-t-medium medium:text-t-medium small:text-t-medium mobile:text-t-medium'}
                        dangerouslySetInnerHTML={{ __html: t('hero_description') }}
                    />
                </div>
            </section>
        </>
    )
}

