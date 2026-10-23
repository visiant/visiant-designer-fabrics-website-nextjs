import type { Metadata, Viewport } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#292019",
};

/**
 * Root shell for the Designer Fabrics website. The design ships exactly as
 * the static pitch site did: the same Google Fonts, the same styles.css,
 * and the same script.js behaviors (menu, FAQ accordion, scroll reveals,
 * consultation slot picker, Start Your Design share flow) — the stylesheet
 * and script are served verbatim from /public so nothing about the look or
 * behavior drifts in the move to Next.js.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/styles.css" />
        <a className="skip-link" href="#main">Skip to content</a>
        {children}
        <Script src="/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
