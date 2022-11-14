import 'styles/globals.css';
import { type ReactNode } from 'react';

interface RootLayoutProps {
    children: ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <head />
            <body>{children}</body>
        </html>
    );
}
