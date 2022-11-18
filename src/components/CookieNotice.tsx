import React, { FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { config } from '../config/config';
import CloseIcon from './assets/close.svg';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';

export type CookieNoticeProps = {};

export const CookieNotice: FC<CookieNoticeProps> = (props) => {
    const {} = props;

    const { t } = useTranslation('common');

    const [allowed, setAllowed] = useState<boolean>(true);

    useEffect(() => {
        setAllowed(
            Cookies.get(config.cookieNotice.cookiesAllowedName) === 'true'
        );
    }, []);

    const allow = () => {
        const domain = new URL(window.location.href).hostname;

        Cookies.set(config.cookieNotice.cookiesAllowedName, 'true', {
            expires: new Date(
                new Date().valueOf() + config.cookieNotice.expires
            ),
            domain
        });

        setAllowed(true);
    };

    if (allowed) {
        return null;
    }

    return (
        <div
            className={classNames(
                'fixed bottom-0 right-0 z-[9] mb-[24px] mr-[24px] flex w-[488px] flex-col rounded-[20px] bg-main-dark p-[32px]',
                'small:left-[20px] small:mr-[20px] small:mb-[20px] small:w-[calc(100%_-_40px)]',
                'mobile:left-[10px] mobile:mr-[10px] mobile:mb-[10px] mobile:w-[calc(100%_-_20px)] mobile:p-[20px]',
                'drop-shadow-cookie-pink'
            )}
        >
            <h1
                className={
                    'mb-[12px] text-h-small-x mobile:text-t-medium small:text-t-medium medium:text-t-medium'
                }
            >
                {t('cookie_notice_popup_title')}
            </h1>

            <div
                className={
                    'mb-[32px] text-t-small mobile:text-t-small-x small:text-t-small-x medium:text-t-small-x'
                }
            >
                <Trans
                    i18nKey="common:cookie_notice_popup_message"
                    components={{
                        component: (
                            <a
                                href={'/cookie-policy'}
                                target={'_blank'}
                                rel="noreferrer"
                                className={
                                    'text-main-light-gray hover:text-hover'
                                }
                            />
                        )
                    }}
                />
            </div>

            <button
                className={classNames(
                    'z-[2] w-fit rounded-[54px] bg-blue-button px-[50px] py-[20px] text-t-medium hover:bg-blue',
                    'mobile:px-[16px] mobile:py-[8px] mobile:text-t-small'
                )}
                onClick={allow}
            >
                {t('cookie_notice_popup_allow_all')}
            </button>

            <button
                className={classNames(
                    'h-[30px] w-[30px] rounded-[30px] border border-main-light-gray font-bold uppercase text-main-light-gray',
                    'absolute right-[10px] top-[10px] flex items-center justify-center',
                    'hover:border-hover hover:text-hover'
                )}
                onClick={() => setAllowed(true)}
            >
                <CloseIcon />
            </button>
        </div>
    );
};
