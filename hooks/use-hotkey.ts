import { useEffect } from 'react';

export const useHotkey = (
    key: { key: string; altKey?: boolean; ctrlKey?: boolean; shiftKey?: boolean; metaKey?: boolean; },
    callback: () => void,
    enabled: boolean,
    deps?: any[]
) => {
    useEffect(() => {
        const keydown = (event: KeyboardEvent) => {
            if (
                event.key === key.key &&
                event.altKey === Boolean(key.altKey) &&
                event.ctrlKey === Boolean(key.ctrlKey) &&
                event.shiftKey === Boolean(key.shiftKey) &&
                event.metaKey === Boolean(key.metaKey)
            ) {
                callback?.();
                event.preventDefault();
            }
        };

        if (enabled) {
            document.addEventListener('keydown', keydown, true);
        }

        return () => {
            document.removeEventListener('keydown', keydown, true);
        }
    }, [enabled, ...(deps ? deps : [])]);
}
