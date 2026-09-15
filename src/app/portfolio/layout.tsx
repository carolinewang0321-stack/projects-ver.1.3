import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '作品集详情',
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {children}
    </div>
  );
}
