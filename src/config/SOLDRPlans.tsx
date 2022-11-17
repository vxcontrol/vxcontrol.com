import { SOLDRAdvantages } from './SOLDR';
import { ReactNode } from 'react';
import NextImage from 'next/image';

import systemRuImage from './assets/system_ru.png';
import orchestrationRuImage from './assets/orchestration_ru.png';
import lifecycleControlRuImage from './assets/lifecycle-control_ru.png';
import detectionRuImage from './assets/detection_ru.png';
import responseRuImage from './assets/response_ru.png';
import systemEnImage from './assets/system_en.png';
import orchestrationEnImage from './assets/orchestration_en.png';
import lifecycleControlEnImage from './assets/lifecycle-control_en.png';
import detectionEnImage from './assets/detection_en.png';
import responseEnImage from './assets/response_en.png';

export const SOLDRPlans: {ru: {[key in SOLDRAdvantages]: ReactNode}, en: {[key in SOLDRAdvantages]: ReactNode}} = {
    ru: {
        system: <NextImage src={systemRuImage} style={{ zIndex: '10' }} />,
        orchestration: <NextImage src={orchestrationRuImage} style={{ zIndex: '10' }} />,
        lifecycleControl: <NextImage src={lifecycleControlRuImage} style={{ zIndex: '10' }} />,
        detection: <NextImage src={detectionRuImage} style={{ zIndex: '10' }} />,
        response: <NextImage src={responseRuImage} style={{ zIndex: '10' }} />,
    },
    en: {
        system: <NextImage src={systemEnImage} style={{ zIndex: '10' }} />,
        orchestration: <NextImage src={orchestrationEnImage} style={{ zIndex: '10' }} />,
        lifecycleControl: <NextImage src={lifecycleControlEnImage} style={{ zIndex: '10' }} />,
        detection: <NextImage src={detectionEnImage} style={{ zIndex: '10' }} />,
        response: <NextImage src={responseEnImage} style={{ zIndex: '10' }} />,
    }
}
