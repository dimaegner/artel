import type { Metadata } from 'next';
import './globals.css';
import { publicAsset } from '@/lib/public-asset';
export const metadata: Metadata = {
 title: 'Артель — строительная экспертиза и исследования в Тюмени',
 icons: { icon: publicAsset('/images/logo.png') },
 description: 'Региональный центр строительных исследований «Артель». Экспертиза, обследования зданий, изыскания и строительный контроль. Тюмень, ул. Республики, 14/1.',
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ru"><body>{children}</body></html>}
