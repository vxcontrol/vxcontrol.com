import React, { FC } from 'react';
import classNames from 'classnames';
import AtSymbolIcon from '../assets/at_symbol.svg';
import { config } from '../../../../../config/config';
import useTranslation from 'next-translate/useTranslation';
import styles from '../../../../../styles/animations.module.scss';

export type TelegramBlockProps = {
    className?: string;
}

export const TelegramBlock: FC<TelegramBlockProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation('home');

    return (
        <section className={classNames('container', className)}>
            <div className={'bg-panel p-[60px] medium:p-[40px] small:p-[40px] mobile:p-[32px] flex flex-col relative rounded-[20px] overflow-hidden'}>
                <h1 className={'text-h-medium-x mb-4 z-[2]'}>
                    {t('telegram_title')}
                </h1>

                <div className={'text-t-medium text-main-light-gray mb-[40px] z-[2]'}>
                    {t('telegram_description')}
                </div>

                <a
                    className={'text-t-medium px-[50px] py-[20px] bg-blue-button rounded-[54px] w-fit hover:bg-blue z-[2]'}
                    href={config.telegramBlock.link}
                    target={'_blank'}
                    rel={'noopener noreferrer'}
                >
                    {t('telegram_link')}
                </a>

                <AtSymbolIcon className={'absolute right-[7%] top-[12%] mobile:hidden z-[1]'} />

                <div className={classNames(
                    'absolute w-[50%] h-[50%] flex items-center justify-center right-[-9%] top-[29%] mobile:hidden z-[0]',
                    'medium:right-[-1%] medium:top-[29%]',
                    'small:right-[3%] small:top-[29%]',
                    styles.telegramIconBackDrop
                )}>
                    <div className={'w-[20%] h-[80%]'} />
                    <div className={'w-[20%] h-[80%]'} />
                </div>
            </div>
        </section>
    )
}
