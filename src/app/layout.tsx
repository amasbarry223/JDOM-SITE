import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "JDOM SITE",
  description: "JDOM - Le Portail National des Données Ouvertes du Mali. Transparence, innovation et souveraineté numérique pour le développement du Mali.",
  keywords: ["JDOM", "Données ouvertes", "Mali", "Open Data", "Transparence", "Innovation", "Données publiques"],
  authors: [{ name: "JDOM" }],
  openGraph: {
    title: "JDOM SITE",
    description: "Le Portail National des Données Ouvertes du Mali",
    url: "https://jdom.ml",
    siteName: "JDOM",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JDOM SITE",
    description: "Le Portail National des Données Ouvertes du Mali",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function removeNextDevTools() {
                  const button = document.getElementById('next-logo');
                  if (button) {
                    const parentDiv = button.closest('div');
                    if (parentDiv) {
                      parentDiv.remove();
                    } else {
                      button.remove();
                    }
                  }
                  // Also remove by attribute
                  const devToolsButton = document.querySelector('[data-nextjs-dev-tools-button="true"]');
                  if (devToolsButton) {
                    const parent = devToolsButton.closest('div');
                    if (parent) {
                      parent.remove();
                    } else {
                      devToolsButton.remove();
                    }
                  }
                }
                // Remove immediately
                removeNextDevTools();
                // Remove on DOMContentLoaded
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', removeNextDevTools);
                }
                // Remove on load
                window.addEventListener('load', removeNextDevTools);
                // Use MutationObserver to catch dynamically added elements
                const observer = new MutationObserver(function(mutations) {
                  removeNextDevTools();
                });
                observer.observe(document.body, {
                  childList: true,
                  subtree: true
                });
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
