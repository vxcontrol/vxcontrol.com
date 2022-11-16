import React, { FC } from 'react';
import classNames from 'classnames';
import AtSymbolIcon from '../assets/at_symbol.svg';
import { config } from '../../../../../config/config';

export type TelegramBlockProps = {
    className?: string;
}

export const TelegramBlock: FC<TelegramBlockProps> = (props) => {
    const { className } = props;

    return (
        <section className={classNames('container', className)}>
            <div className={'bg-panel p-[60px] medium:p-[40px] small:p-[40px] mobile:p-[32px] flex flex-col relative rounded-[20px] overflow-hidden'}>
                <h1 className={'text-h-medium-x mb-4 z-[2]'}>
                    SOLDR в Телеграме
                </h1>

                <div className={'text-t-medium text-main-light-gray mb-[40px] z-[2]'}>
                    Узнать больше о продукте и задать вопрос экспертам можно в чате
                </div>

                <a
                    className={'text-t-medium px-[50px] py-[20px] bg-blue-button rounded-[54px] w-fit hover:bg-blue z-[2]'}
                    href={config.telegramBlock.link}
                    target={'_blank'}
                    rel={'noopener noreferrer'}
                >
                    Перейти
                </a>

                <AtSymbolIcon className={'absolute right-0 top-0 mobile:right-[-50%] mobile:scale-50 z-[1]'} />
            </div>
        </section>
    )
}
