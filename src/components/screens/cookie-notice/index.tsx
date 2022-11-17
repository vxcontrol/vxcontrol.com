import React, { FC } from 'react';
import Link from "next/link";
import { Footer } from "../../Footer";
import LeftArrowIcon from "./components/assets/left-arrow.svg";

export type CookieNoticeScreenProps = {}

export const CookieNoticeScreen: FC<CookieNoticeScreenProps> = (props) => {
    const {} = props;

    return (
        <>
            <div className={'flex flex-col min-h-screen bg-gradient-radial'}>
                <section className={'container grow'}>
                    <Link href={'/'}>
                        <a className={'inline-flex items-center mt-12 text-lg text-main-light-gray'}>
                            <LeftArrowIcon className={'mr-4'} />
                            Вернуться назад
                        </a>
                    </Link>
                    <h1 className={'text-6xl mt-10 mb-10 medium:text-4xl small:text-4xl mobile:text-4xl'}>Политика использования файлов куки</h1>
                    <h2 className={'text-4xl mb-4 medium:text-2xl small:text-2xl mobile:text-2xl'}>Файлы куки аналитики</h2>
                    <div className={'grid grid-cols-2 gap-16 mb-20 medium:grid-cols-1 medium:gap-8 medium:mb-10 small:grid-cols-1 small:gap-6 mobile:grid-cols-1'}>
                        <div className={'grid-cols-1'}>
                            <p className={'text-lg leading-7 text-main-light-gray'}>Эти файлы куки позволяют нам подсчитывать количество посещений и&nbsp;анализировать источники трафика, чтобы мы&nbsp;могли измерять и&nbsp;улучшать производительность нашего сайта. Файлы куки аналитики помогают нам узнать, какие страницы наиболее и&nbsp;наименее популярны, и&nbsp;увидеть, как посетители перемещаются по&nbsp;сайту. Вся информация, собираемая этими файлами куки,&nbsp;&mdash; агрегированная и&nbsp;анонимная. Если вы&nbsp;запретите использование этих файлов куки, мы&nbsp;не&nbsp;узнаем, когда вы&nbsp;посещали наш сайт, и&nbsp;не&nbsp;сможем отслеживать его работу</p>
                        </div>
                        <div className={'grid-cols-1'}>
                            <div className={'overflow-x-auto'}>
                                <table className={'w-full min-w-max'}>
                                    <thead>
                                    <tr className={'text-left'}>
                                        <th className={'pr-5 pl-5 pb-2.5 font-normal text-lg text-main-light-gray'}>домен</th>
                                        <th className={'pr-5 pl-5 pb-2.5 font-normal text-lg text-main-light-gray'}>имя файла куки</th>
                                        <th className={'pr-5 pl-5 pb-2.5 font-normal text-lg text-main-light-gray'}>1st или 3rd party</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className={'bg-panel'}>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover border-main-dark border-r-2'}>.standoff365.com</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover border-main-dark border-r-2'}>_ym_isad</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover border-main-dark border-r-2'}>3rd party</td>
                                    </tr>
                                    <tr>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover'}>.standoff365.com</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover'}>_ym_isad</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover'}>3rd party</td>
                                    </tr>
                                    <tr className={'bg-panel'}>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover border-main-dark border-r-2'}>.standoff365.com</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover border-main-dark border-r-2'}>_ym_isad</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover border-main-dark border-r-2'}>3rd party</td>
                                    </tr>
                                    <tr>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover'}>.standoff365.com</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover'}>_ym_isad</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover'}>3rd party</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <h2 className={'text-4xl mb-4 medium:text-2xl small:text-2xl mobile:text-2xl'}>Файлы куки аналитики</h2>
                    <div className={'grid grid-cols-2 gap-16 mb-20 medium:grid-cols-1 medium:gap-8 medium:mb-10 small:grid-cols-1 small:gap-6 mobile:grid-cols-1'}>
                        <div className={'grid-cols-1'}>
                            <p className={'text-lg leading-7 text-main-light-gray'}>Эти файлы куки позволяют нам подсчитывать количество посещений и&nbsp;анализировать источники трафика, чтобы мы&nbsp;могли измерять и&nbsp;улучшать производительность нашего сайта. Файлы куки аналитики помогают нам узнать, какие страницы наиболее и&nbsp;наименее популярны, и&nbsp;увидеть, как посетители перемещаются по&nbsp;сайту. Вся информация, собираемая этими файлами куки,&nbsp;&mdash; агрегированная и&nbsp;анонимная. Если вы&nbsp;запретите использование этих файлов куки, мы&nbsp;не&nbsp;узнаем, когда вы&nbsp;посещали наш сайт, и&nbsp;не&nbsp;сможем отслеживать его работу</p>
                        </div>
                        <div className={'grid-cols-1'}>
                            <div className={'overflow-x-auto'}>
                                <table className={'w-full min-w-max'}>
                                    <thead>
                                    <tr className={'text-left'}>
                                        <th className={'pr-5 pl-5 pb-2.5 font-normal text-lg text-main-light-gray'}>домен</th>
                                        <th className={'pr-5 pl-5 pb-2.5 font-normal text-lg text-main-light-gray'}>имя файла куки</th>
                                        <th className={'pr-5 pl-5 pb-2.5 font-normal text-lg text-main-light-gray'}>1st или 3rd party</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className={'bg-panel'}>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover border-main-dark border-r-2'}>.standoff365.com</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover border-main-dark border-r-2'}>_ym_isad</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover border-main-dark border-r-2'}>3rd party</td>
                                    </tr>
                                    <tr>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover'}>.standoff365.com</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover'}>_ym_isad</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover'}>3rd party</td>
                                    </tr>
                                    <tr className={'bg-panel'}>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover border-main-dark border-r-2'}>.standoff365.com</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover border-main-dark border-r-2'}>_ym_isad</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover border-main-dark border-r-2'}>3rd party</td>
                                    </tr>
                                    <tr>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover'}>.standoff365.com</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover'}>_ym_isad</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover'}>3rd party</td>
                                    </tr>
                                    <tr className={'bg-panel'}>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover border-main-dark border-r-2'}>.standoff365.com</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover border-main-dark border-r-2'}>_ym_isad</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover border-main-dark border-r-2'}>3rd party</td>
                                    </tr>
                                    <tr>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover'}>.standoff365.com</td>
                                        <td className={'pr-5 pl-5 pt-2.5 pb-2.5 text-lg text-hover'}>_ym_isad</td>
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
