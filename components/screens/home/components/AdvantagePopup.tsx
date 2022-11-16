import React, { FC, useEffect } from 'react';
import classNames from 'classnames';
import { SOLDRAdvantages } from '../../../../config/SOLDR';


export interface AdvantagePopupProps {
    className?: string;
    advantage?: SOLDRAdvantages;
    open?: boolean;
    onClose?: () => void;
}

export const AdvantagePopup: FC<AdvantagePopupProps> = (props) => {
    const {
        className,
        advantage,
        open,
        onClose,
    } = props;

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [open]);

    if (!open || !advantage) {
        return null;
    }

    return (
        <div className={classNames(
            className,
            'fixed top-0 left-0 bg-popup w-[100vw] h-[100vh] z-[10] backdrop-blur-popup',
            'flex flex-col'
        )}>
            <div className={classNames(className, 'm-auto')}>
                Modal works!

                <button onClick={onClose}>CLOSE</button>
            </div>
        </div>
    )
}
