import React, { FC } from 'react';
import Link from "next/link";
import { Footer } from "../../Footer";
import LeftArrowIcon from "./components/assets/left-arrow.svg";
import useTranslation from 'next-translate/useTranslation';

export type CookieNoticeScreenProps = {}

export const CookieNoticeScreen: FC<CookieNoticeScreenProps> = (props) => {
    const {} = props;

    const { t } = useTranslation('cookies-notice');

    return (
        <>
            <div className={'flex flex-col min-h-screen bg-gradient-radial'}>
                <section className={'container grow'}>
                    <Link href={'/'}>
                        <a className={'inline-flex items-center mt-12 text-lg text-main-light-gray'}>
                            <LeftArrowIcon className={'mr-4'} />
                            {t('go_back_link')}
                        </a>
                    </Link>
                    <h1 className={'text-6xl mt-10 mb-10 medium:text-4xl small:text-4xl mobile:text-4xl'}>{t('header')}</h1>
                    <h2 className={'text-4xl mb-4 medium:text-2xl small:text-2xl mobile:text-2xl'}>{t('files_analytic_header')}</h2>
                    <div className={'grid grid-cols-2 gap-16 mb-20 medium:grid-cols-1 medium:gap-8 medium:mb-10 small:grid-cols-1 small:gap-6 mobile:grid-cols-1'}>
                        <div className={'grid-cols-1'}>
                            <p className={'text-lg leading-7 text-main-light-gray'}>
                                {t('files_analytic_info')}
                            </p>
                        </div>
                        <div className={'grid-cols-1'}>
                            <div className={'overflow-x-auto'}>
                                <table className={'w-full min-w-max'}>
                                    <thead>
                                        <tr className={'text-left'}>
                                            <th className={'pr-5 pl-5 pb-2.5 font-normal text-lg text-main-light-gray'}>{t('table_domain')}</th>
                                            <th className={'pr-5 pl-5 pb-2.5 font-normal text-lg text-main-light-gray'}>{t('table_file_name')}</th>
                                            <th className={'pr-5 pl-5 pb-2.5 font-normal text-lg text-main-light-gray'}>{t('table_party')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <tr className={'bg-panel'}>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover border-main-dark border-r-2'}>vxcontrol.com</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover border-main-dark border-r-2'}>_ym_isad</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover border-main-dark border-r-2'}>3rd party</td>
                                    </tr>
                                    <tr>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover'}>vxcontrol.com</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover'}>_ym_d</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover'}>3rd party</td>
                                    </tr>
                                    <tr className={'bg-panel'}>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover border-main-dark border-r-2'}>vxcontrol.com</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover border-main-dark border-r-2'}>_ym_uid</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover border-main-dark border-r-2'}>3rd party</td>
                                    </tr>
                                    <tr>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover'}>.yandex.ru</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover'}>ymex</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover'}>3rd party</td>
                                    </tr>
                                    <tr className={'bg-panel'}>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover border-main-dark border-r-2'}>mc.yandex.ru</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover border-main-dark border-r-2'}>_yabs-sid</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover border-main-dark border-r-2'}>3rd party</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <h2 className={'text-4xl mb-4 medium:text-2xl small:text-2xl mobile:text-2xl'}>{t('files_target_header')}</h2>
                    <div className={'grid grid-cols-2 gap-16 mb-20 medium:grid-cols-1 medium:gap-8 medium:mb-10 small:grid-cols-1 small:gap-6 mobile:grid-cols-1'}>
                        <div className={'grid-cols-1'}>
                            <p className={'text-lg leading-7 text-main-light-gray'}>
                                {t('files_target_info')}
                            </p>
                        </div>
                        <div className={'grid-cols-1'}>
                            <div className={'overflow-x-auto'}>
                                <table className={'w-full min-w-max'}>
                                    <thead>
                                    <tr className={'text-left'}>
                                        <th className={'pr-5 pl-5 pb-2.5 font-normal text-lg text-main-light-gray'}>{t('table_domain')}</th>
                                        <th className={'pr-5 pl-5 pb-2.5 font-normal text-lg text-main-light-gray'}>{t('table_file_name')}</th>
                                        <th className={'pr-5 pl-5 pb-2.5 font-normal text-lg text-main-light-gray'}>{t('table_party')}</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className={'bg-panel'}>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover border-main-dark border-r-2'}>.yandex.ru</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover border-main-dark border-r-2'}>yandexuid</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover border-main-dark border-r-2'}>3rd party</td>
                                    </tr>
                                    <tr>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover'}>.yandex.ru</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover'}>_yasc</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover'}>3rd party</td>
                                    </tr>
                                    <tr className={'bg-panel'}>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover border-main-dark border-r-2'}>.yandex.ru</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover border-main-dark border-r-2'}>yuidss</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover border-main-dark border-r-2'}>3rd party</td>
                                    </tr>
                                    <tr>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover'}>.yandex.ru</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover'}>device_id</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover'}>3rd party</td>
                                    </tr>
                                    <tr className={'bg-panel'}>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover border-main-dark border-r-2'}>.yandex.ru</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover border-main-dark border-r-2'}>i</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover border-main-dark border-r-2'}>3rd party</td>
                                    </tr>
                                    <tr>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover'}>.yandex.ru</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover'}>active-browser-timestamp</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover'}>3rd party</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer/>
            </div>
        </>
    );
}
