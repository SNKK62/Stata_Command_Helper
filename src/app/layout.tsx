import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stata Command Helper',
  description: 'Stataのコマンド入力を補助する',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
