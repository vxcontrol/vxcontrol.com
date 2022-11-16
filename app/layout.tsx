import '@/styles/globals.scss';
import { type ReactNode } from 'react';

interface RootLayoutProps {
    children: ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="ru">
            <head />
            <body>{children}</body>
        </html>
    );
}
