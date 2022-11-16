import React, { FC, useEffect } from 'react';
import classNames from 'classnames';
import { SOLDR, SOLDRAdvantages } from '../../../../config/SOLDR';
import CloseIcon from './assets/close.svg';
import { SOLDRPlans } from '../../../../config/SOLDRPlans';
import { useHotkey } from '../../../../hooks/use-hotkey';

export interface AdvantagePopupProps {
    className?: string;
    advantage?: SOLDRAdvantages;
    onClose?: () => void;
}

export const AdvantagePopup: FC<AdvantagePopupProps> = (props) => {
    const {
        className,
        advantage,
        onClose,
    } = props;

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = '';
        }
    }, []);

    useHotkey({ key: 'Escape' }, () => {
        onClose?.();
    }, true, [onClose]);

    return (
        <div className={classNames(
            className,
            'fixed top-0 left-0 bg-popup w-[100vw] h-[100vh] z-[10] backdrop-blur-popup',
            'flex flex-col'
        )}>
            <div className={classNames(
                className,
                'bg-main-dark relative p-[60px]',
                'w-[100vw]',
                'small:p-[40px] small:h-[100vh] flex',
                'mobile:p-[20px] mobile:h-[100vh] flex',
                'medium:h-[100vh] flex',
                'large:max-w-[1024px] large:m-auto large:rounded-[20px]',
                'x-large:max-w-[1280px] x-large:m-auto x-large:rounded-[20px]',
            )}>
                <div className={'flex small:flex-col mobile:flex-col small:items-center mobile:items-center small:my-auto mobile:my-auto'}>
                    <div className={'x-large:w-[60%] large:w-[60%] w-[50%] flex items-center justify-center small:w-full mobile:w-full'}>
                        {SOLDRPlans[advantage]}
                    </div>

                    <div className={'x-large:w-[40%] large:w-[40%] w-[50%] flex flex-col justify-center small:w-full mobile:w-full'}>
                        <h1 className={'text-h-medium-x medium:h-small-x small:h-small-x mobile:h-small-x mb-4'}>
                            {SOLDR[advantage].name}
                        </h1>
                        <div
                            className={'text-t-medium medium:t-small small:t-small mobile:t-small text-main-light-gray'}
                            dangerouslySetInnerHTML={{ __html: SOLDR[advantage].description }}
                        />
                    </div>
                </div>

                <button
                    className={classNames(
                        'rounded-full border border border-main-light-gray hover:border-hover w-[54px] h-[54px] flex justify-center items-center',
                        'mobile:w-[40px] mobile:h-[40px]',
                        'absolute top-[20px] right-[20px]'
                    )}
                    onClick={onClose}
                >
                    <CloseIcon />
                </button>
            </div>
        </div>
    )
}
