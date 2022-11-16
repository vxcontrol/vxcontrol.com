import React, { FC } from 'react';
import classNames from 'classnames';
import { SOLDR, SOLDRAdvantages } from '../../../../../config/SOLDR';
import CircleNextFillIcon from '../assets/circle-next-fill.svg';

export type SliderBlockProps = {
    className?: string;
    onSelectAdvantage?: (advantage: SOLDRAdvantages) => void;
}

export const SliderBlock: FC<SliderBlockProps> = (props) => {
    const { className, onSelectAdvantage } = props;

    return (
        <section className={classNames(className, 'flex gap-5')}>
            {Object.keys(SOLDR).map((key: SOLDRAdvantages) => (
                <article key={key}>
                    <button
                        className={'flex items-center text-base'}
                        onClick={() => onSelectAdvantage?.(key)}
                    >
                        <span className={'mr-3'}>{SOLDR[key].name}</span>
                        <CircleNextFillIcon />
                    </button>
                </article>
            ))}
        </section>
    )
}
