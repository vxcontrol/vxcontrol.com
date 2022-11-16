import { SOLDRAdvantages } from './SOLDR';
import { ReactNode } from 'react';

import SystemIcon from './assets/system.svg';
import OrchestrationIcon from './assets/orchestration.svg';
import LifecycleControlIcon from './assets/lifecycle-control.svg';
import DetectionIcon from './assets/detection.svg';
import ResponseIcon from './assets/response.svg';

export const SOLDRPlans: {[key in SOLDRAdvantages]: ReactNode} = {
    system: <SystemIcon />,
    orchestration: <OrchestrationIcon />,
    lifecycleControl: <LifecycleControlIcon />,
    detection: <DetectionIcon />,
    response: <ResponseIcon />,
}
