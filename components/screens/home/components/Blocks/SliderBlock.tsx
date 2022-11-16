import React, { FC } from 'react';
import classNames from 'classnames';
import styles from '../../../../../styles/styles.module.scss';
import { SOLDR, SOLDRAdvantages } from '../../../../../config/SOLDR';
import CircleNextFillIcon from '../assets/circle-next-fill.svg';
import SIcon from '../assets/S.svg';
import OIcon from '../assets/O.svg';
import LIcon from '../assets/L.svg';
import DIcon from '../assets/D.svg';
import RIcon from '../assets/R.svg';

export type SliderBlockProps = {
    className?: string;
    onSelectAdvantage?: (advantage: SOLDRAdvantages) => void;
}

export const SliderBlock: FC<SliderBlockProps> = (props) => {
    const { className, onSelectAdvantage } = props;

    return (
        <ul className={classNames(className,
            'flex overflow-x-scroll items-center gap-4 mobile:gap-6',
            'ml-[80px] medium:ml-[40px] small:ml-[40px] mobile:ml-[20px]',
            styles.hideScrollbars
        )}>
            {Object.keys(SOLDR).map((key: SOLDRAdvantages) => (
                <li key={key} className={'flex cursor-pointer items-center mobile:flex-col'} onClick={() => onSelectAdvantage?.(key)}>
                    <div>
                        {key === 'system' && <SIcon />}
                        {key === 'orchestration' && <OIcon />}
                        {key === 'lifecycleControl' && <LIcon />}
                        {key === 'detection' && <DIcon />}
                        {key === 'response' && <RIcon />}
                    </div>

                    <div className={classNames(
                        'flex flex-col',
                        'w-[455px] medium:w-[289px] small:w-[289px] mobile:w-[276px]',
                        'mobile:pl-[16px]'
                    )}>
                        <h1 className={'flex items-center text-h-small-x medium:text-t-medium small:text-t-medium mobile:text-t-medium mb-[12px]'}>
                            <span className={'mr-3'}>{SOLDR[key].name}</span>
                            <CircleNextFillIcon />
                        </h1>

                        <div className={'text-main-light-gray text-t-medium medium:text-t-small small:text-t-small mobile:text-t-small'}>
                            {SOLDR[key].shortDescription}
                        </div>
                    </div>

                    {/*<button*/}
                    {/*    className={'flex items-center text-base'}*/}
                    {/*    onClick={() => onSelectAdvantage?.(key)}*/}
                    {/*>*/}
                    {/*    <span className={'mr-3'}>{SOLDR[key].name}</span>*/}
                    {/*    <CircleNextFillIcon />*/}
                    {/*</button>*/}
                </li>
            ))}
        </ul>
    )
}
