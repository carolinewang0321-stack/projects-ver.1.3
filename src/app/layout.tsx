import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '[YOUR NAME] | 游戏运营 - 个人简历 & 作品集',
  description: '游戏运营岗位求职者的个人简历与作品集展示网站',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
