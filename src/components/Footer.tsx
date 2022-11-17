import React, { FC } from 'react';
import classNames from 'classnames';
import PhoneIcon from './assets/phone.svg';
import MailIcon from './assets/mail.svg';
import Link from 'next/link';
import { config } from '../config/config';
import useTranslation from 'next-translate/useTranslation';

export type FooterProps = {
    className?: string;
}

export const Footer: FC<FooterProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation('common');

    return (
        <footer className={classNames(className)}>
            <div className={'container py-[32px] flex gap-[32px] mobile:flex-col mobile:justify-center flex-wrap'}>
                <div className={'flex flex-col mobile:flex-row gap-[12px] justify-center'}>
                    <div className={'flex items-center gap-[12px]'}>
                        <PhoneIcon />

                        <a
                            className={'text-t-small medium:text-t-small-x small:text-t-small-x mobile:text-t-small-x text-blue hover:text-blue-button'}
                            href={`tel:${config.footer.phoneNumber}`}
                            target={'_blank'}
                            rel={'noopener noreferrer'}
                        >
                            {config.footer.phoneNumberString}
                        </a>

                    </div>

                    <div className={'flex items-center gap-[12px]'}>
                        <MailIcon />

                        <a
                            className={'text-t-small medium:text-t-small-x small:text-t-small-x mobile:text-t-small-x text-blue hover:text-blue-button'}
                            href={`mailto:${config.footer.email}`}
                            target={'_blank'}
                            rel={'noopener noreferrer'}
                        >
                            {config.footer.email}
                        </a>
                    </div>
                </div>

                <div className={classNames(
                    'text-main-light-gray text-t-small medium:text-t-small-x small:text-t-small-x mobile:text-t-small-x max-w-[320px] small:max-w-[240px] mobile:max-w-full',
                    'flex items-center',
                    'mobile:text-center'
                )}>
                    {t('footer_address')}
                </div>

                <div className={'ml-auto flex items-end mobile:justify-center mobile:ml-0'}>
                    <Link href={'/cookie-policy'}>
                        <a className={'text-t-small medium:text-t-small-x small:text-t-small-x mobile:text-t-small-x text-blue hover:text-blue-button'}>{t('footer_cookies_policy_link')}</a>
                    </Link>
                </div>
            </div>
        </footer>
    )
}
