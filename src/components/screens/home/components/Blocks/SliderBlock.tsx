import React, { FC, useCallback, useRef } from 'react';
import classNames from 'classnames';
import styles from '../../../../../styles/styles.module.scss';
import { SOLDR, SOLDRAdvantages } from '../../../../../config/SOLDR';
import CircleNextFillIcon from '../assets/circle-next-fill.svg';
import letterSImage from '../assets/S.png';
import letterOImage from '../assets/O.png';
import letterLImage from '../assets/L.png';
import letterDImage from '../assets/D.png';
import letterRImage from '../assets/R.png';
import LeftArrowIcon from '../assets/left-arrow.svg';
import RightArrowIcon from '../assets/right-arrow.svg';
import useTranslation from 'next-translate/useTranslation';
import NextImage from 'next/image';
import animations from '../../../../../styles/animations.module.scss';

export type SliderBlockProps = {
    className?: string;
    onSelectAdvantage?: (advantage: SOLDRAdvantages) => void;
}

export const SliderBlock: FC<SliderBlockProps> = (props) => {
    const { className, onSelectAdvantage } = props;

    const { t } = useTranslation('home');

    const scrollContainerRef = useRef<HTMLUListElement>(null);

    const scroll = useCallback((direction: 'left' | 'right') => {
        const list = scrollContainerRef.current;

        if (!list) {
            return;
        }

        const screenWidth = window.innerWidth;
        // const gap = 16;
        // const itemWidth = list.firstElementChild.clientWidth;
        // const scrollStep = itemWidth + gap;
        const scrollStep = screenWidth;
        const scrollLeft = list.scrollLeft;
        const newScrollLeft = scrollLeft + (scrollStep * (direction === 'left' ? -1 : 1));

        list.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }, [scrollContainerRef.current]);

    return (
        <section className={classNames(className)}>
            <div className={'mobile:hidden flex justify-end gap-[12px] container'}>
                <button
                    className={classNames(
                        'font-bold uppercase border border-main-light-gray w-[54px] h-[54px] rounded-[54px] text-main-light-gray',
                        'flex items-center justify-center',
                        'hover:text-hover hover:border-hover',
                    )}
                    onClick={() => scroll('left')}
                >
                    <LeftArrowIcon />
                </button>

                <button
                    className={classNames(
                        'font-bold uppercase border border-main-light-gray w-[54px] h-[54px] rounded-[54px] text-main-light-gray',
                        'flex items-center justify-center',
                        'hover:text-hover hover:border-hover',
                    )}
                    onClick={() => scroll('right')}
                >
                    <RightArrowIcon />
                </button>
            </div>

            <ul
                ref={scrollContainerRef}
                className={classNames(
                'relative flex overflow-x-scroll items-center gap-4 mobile:gap-6',
                // 'ml-[80px] medium:ml-[40px] small:ml-[40px] mobile:ml-[20px]',
                'pl-[80px] medium:pl-[40px] small:pl-[40px] mobile:pl-[20px] py-[55px] mobile:pt-[85px]',
                styles.hideScrollbars
            )}>
                {SOLDR.map((key: SOLDRAdvantages) => (
                    <li key={key} className={'flex cursor-pointer items-center mobile:flex-col'} onClick={() => onSelectAdvantage?.(key)}>
                        <div className={'relative'}>
                            {key === 'system' && <div className={'w-[105px]'}><NextImage src={letterSImage} style={{ zIndex: '2' }} /></div>}
                            {key === 'orchestration' && <div className={'w-[125px]'}><NextImage src={letterOImage} style={{ zIndex: '2' }} /></div>}
                            {key === 'lifecycleControl' && <div className={'w-[91px]'}><NextImage src={letterLImage} style={{ zIndex: '2' }} /></div>}
                            {key === 'detection' && <div className={'w-[117px]'}><NextImage src={letterDImage} style={{ zIndex: '2' }} /></div>}
                            {key === 'response' && <div className={'w-[105px]'}><NextImage src={letterRImage} style={{ zIndex: '2' }} /></div>}

                            <div
                                {...{ [key]: '' }}
                                className={classNames(
                                'absolute flex items-center justify-center z-[1]',
                                animations.SOLDRLetterBackDrop,
                            )}>
                                <div className={'w-[80px] h-[80px]'} />
                                <div className={'w-[100px] h-[100px]'} />
                                <div className={'w-[80px] h-[80px]'} />
                            </div>
                        </div>

                        <div className={classNames(
                            'flex flex-col',
                            'w-[455px] medium:w-[289px] small:w-[289px] mobile:w-[276px]',
                            'mobile:pl-[16px]'
                        )}>
                            <h1 className={'flex items-center text-h-small-x medium:text-t-medium small:text-t-medium mobile:text-t-medium mb-[12px]'}>
                                <span className={'mr-3'}>{t(`${key}_name`)}</span>
                                <CircleNextFillIcon />
                            </h1>

                            <div className={'text-main-light-gray text-t-medium medium:text-t-small small:text-t-small mobile:text-t-small'}>
                                {t(`${key}_shortDescription`)}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}
