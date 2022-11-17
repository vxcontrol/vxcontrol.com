import { SOLDRAdvantages } from './SOLDR';
import { ReactNode } from 'react';

import SystemRuIcon from './assets/system_ru.svg';
import OrchestrationRuIcon from './assets/orchestration_ru.svg';
import LifecycleControlRuIcon from './assets/lifecycle-control_ru.svg';
import DetectionRuIcon from './assets/detection_ru.svg';
import ResponseRuIcon from './assets/response_ru.svg';
import SystemEnIcon from './assets/system_en.svg';
import OrchestrationEnIcon from './assets/orchestration_en.svg';
import LifecycleControlEnIcon from './assets/lifecycle-control_en.svg';
import DetectionEnIcon from './assets/detection_en.svg';
import ResponseEnIcon from './assets/response_en.svg';

export const SOLDRPlans: {ru: {[key in SOLDRAdvantages]: ReactNode}, en: {[key in SOLDRAdvantages]: ReactNode}} = {
    ru: {
        system: <SystemRuIcon className={'w-full h-full'} />,
        orchestration: <OrchestrationRuIcon className={'w-full h-full'} />,
        lifecycleControl: <LifecycleControlRuIcon className={'w-full h-full'} />,
        detection: <DetectionRuIcon className={'w-full h-full'} />,
        response: <ResponseRuIcon className={'w-full h-full'} />,
    },
    en: {
        system: <SystemEnIcon className={'w-full h-full'} />,
        orchestration: <OrchestrationEnIcon className={'w-full h-full'} />,
        lifecycleControl: <LifecycleControlEnIcon className={'w-full h-full'} />,
        detection: <DetectionEnIcon className={'w-full h-full'} />,
        response: <ResponseEnIcon className={'w-full h-full'} />,
    }
}
