
import { Providers } from "@/components/Providers";
import type { Metadata } from 'next';
import "@/index.css";

export const metadata: Metadata = {
  title: 'SwiftFrame Admin',
  description: 'Admin Dashboard for SwiftFrame',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
