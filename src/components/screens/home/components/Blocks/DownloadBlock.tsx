import React, { FC } from 'react';
import classNames from 'classnames';
import logoImage from '../assets/logo.png';
import GithubIcon from '../assets/github.svg';
import useTranslation from 'next-translate/useTranslation';
import { config } from '../../../../../config/config';
import NextImage from 'next/image';
import animations from '../../../../../styles/animations.module.scss';

export type DownloadBlockProps = {
    className?: string;
}

export const DownloadBlock: FC<DownloadBlockProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation('home');

    return (
        <section className={classNames(className, 'bg-panel py-[80px] small:py[64px] mobile:py[64px] mobile:pb-0')}>
            <div className={'container flex items-center justify-evenly mobile:flex-col gap-4 mobile:gap-12 mobile:items-center'}>
                <div className={'relative w-[360px] medium:w-[277px] small:w-[240px] mobile:w-[196px]'}>
                    <NextImage src={logoImage} style={{ zIndex: '2' }} />

                    <div className={classNames(
                        'absolute w-[125%] h-[125%] flex items-center justify-center z-[1]',
                        'top-[-15%] left-[-15%]',
                        animations.planBackDrop,
                    )}>
                        <div className={'w-[40%] h-[30%] bg-[#a716ff]'} />
                        <div className={'w-[40%] h-[30%] bg-[#1657ff]'} />
                    </div>
                </div>

                <div className={'flex flex-col mobile:items-center'}>
                    <h1 className={'text-h-medium-x medium:text-h-small-x small:text-h-small-x mobile:text-h-small-x mb-4'}>
                        {t('download_title')}
                    </h1>

                    <div className={'text-t-medium medium:text-t-small small:text-t-medium mobile:text-t-small text-main-light-gray mb-8 mobile:text-center'}>
                        {t('download_description')}
                    </div>

                    <a
                        className={'flex items-center text-t-medium px-[40px] py-[20px] bg-main-dark rounded-[54px] w-fit hover:drop-shadow-hover-simple'}
                        href={config.downloadBlock.link}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                    >
                        {t('download_link')}

                        <GithubIcon className={'ml-4'} />
                    </a>
                </div>
            </div>
        </section>
    )
}
