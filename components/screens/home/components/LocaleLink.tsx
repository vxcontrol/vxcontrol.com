import classNames from 'classnames';
import Link from 'next/link';
import React, { FC } from 'react';

const LOCALE_TEXT = { 'ru': 'ру', 'en': 'en' };

export type LocaleLinkProps = {
    className?: string;
    locale: 'ru' | 'en';
}

export const LocaleLink: FC<LocaleLinkProps> = ({ className, locale }) => {
    const currentLocale = 'ru';

    return (
        <Link
            className={classNames(
                className,
                'font-bold uppercase border border-main-light-gray px-[32px] py-[10px] rounded-[54px] text-main-light-gray',
                'hover:text-hover hover:border-hover',
                locale === currentLocale && 'bg-main-light-gray text-main-dark pointer-events-none',
            )}
            href={'/'}
            locale={locale}
        >
            {LOCALE_TEXT[locale]}
        </Link>
    );
};
