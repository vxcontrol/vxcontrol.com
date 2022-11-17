import React, { FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { config } from '../config/config';
import CloseIcon from './assets/close.svg';

export type CookieNoticeProps = {}

export const CookieNotice: FC<CookieNoticeProps> = (props) => {
    const {} = props;

    const [allowed, setAllowed] = useState<boolean>(true);

    useEffect(() => {
        setAllowed(Cookies.get(config.cookieNotice.cookiesAllowedName) === 'true');
    }, []);

    const allow = () => {
        const domain = new URL(window.location.href).hostname;

        Cookies.set(config.cookieNotice.cookiesAllowedName, 'true', {
            expires: new Date(new Date().valueOf() + config.cookieNotice.expires),
            domain,
        });

        setAllowed(true);
    };

    if (allowed) {
        return null;
    }

    return (
        <div className={classNames(
            'bg-main-dark rounded-[20px] p-[32px] fixed bottom-0 right-0 mb-[24px] mr-[24px] w-[488px] flex flex-col z-[9]',
            'small:w-[calc(100%_-_40px)] small:mr-[20px] small:mb-[20px] small:left-[20px]',
            'mobile:w-[calc(100%_-_20px)] mobile:p-[20px] mobile:mr-[10px] mobile:mb-[10px] mobile:left-[10px]'
        )}>
            <h1 className={'text-h-small-x medium:text-t-medium small:text-t-medium mobile:text-t-medium mb-[12px]'}>
                Уведомление о куки
            </h1>

            <div className={'text-t-small medium:text-t-small-x small:text-t-small-x mobile:text-t-small-x mb-[32px]'}>
                Мы используем куки. Оставаясь на сайте, вы соглашаетесь <Link href={'/cookie-notice'}>
                    <a className={'text-main-light-gray hover:text-hover'}>
                        с условиями их использования
                    </a>
                </Link>
            </div>

            <button
                className={'text-t-medium px-[50px] py-[20px] bg-blue-button rounded-[54px] w-fit hover:bg-blue z-[2]'}
                onClick={allow}
            >
                Принять все
            </button>

            <button
                className={classNames(
                    'font-bold uppercase border border-main-light-gray w-[30px] h-[30px] rounded-[30px] text-main-light-gray',
                    'flex items-center justify-center absolute right-[10px] top-[10px]',
                    'hover:text-hover hover:border-hover',
                )}
                onClick={() => setAllowed(true)}
            >
                <CloseIcon />
            </button>
        </div>
    )
}
