import React, { FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { config } from '../config/config';
import CloseIcon from './assets/close.svg';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';

export type CookieNoticeProps = {}

export const CookieNotice: FC<CookieNoticeProps> = (props) => {
    const {} = props;

    const { t } = useTranslation('common');

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
                {t('cookie_notice_popup_title')}
            </h1>

            <div className={'text-t-small medium:text-t-small-x small:text-t-small-x mobile:text-t-small-x mb-[32px]'}>
                <Trans
                    i18nKey="common:cookie_notice_popup_message"
                    components={{
                        component: <a href={'/cookie-notice'} target={'_blank'} rel="noreferrer" className={'text-main-light-gray hover:text-hover'} />,
                    }}
                />
            </div>

            <button
                className={'text-t-medium px-[50px] py-[20px] bg-blue-button rounded-[54px] w-fit hover:bg-blue z-[2]'}
                onClick={allow}
            >
                {t('cookie_notice_popup_allow_all')}
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