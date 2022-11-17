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
        system: <NextImage src={systemRuImage} />,
        orchestration: <NextImage src={orchestrationRuImage} />,
        lifecycleControl: <NextImage src={lifecycleControlRuImage} />,
        detection: <NextImage src={detectionRuImage} />,
        response: <NextImage src={responseRuImage} />,
    },
    en: {
        system: <NextImage src={systemEnImage} />,
        orchestration: <NextImage src={orchestrationEnImage} />,
        lifecycleControl: <NextImage src={lifecycleControlEnImage} />,
        detection: <NextImage src={detectionEnImage} />,
        response: <NextImage src={responseEnImage} />,
    }
}
