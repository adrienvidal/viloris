import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ContactModalProvider } from "@/lib/contact-modal-context";
import { ModalContainer } from "@/components/ModalContainer";
import { Analytics } from "@vercel/analytics/next";

// Self-hosted (latin, variable) — next/font/google breaks builds when Google Fonts returns extensionless URLs
const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  weight: "100 900",
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = localFont({
  src: "./fonts/space-grotesk-latin.woff2",
  weight: "300 700",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adrien Vidal — Automatisation IA & Agents sur-mesure",
  description:
    "Développeur senior (Chanel, Darty, Fnac) spécialisé en automatisation IA et agents sur-mesure pour les PME qui veulent scaler sans recruter.",
  authors: [{ name: "Adrien Vidal" }],
  icons: {
    icon: "/favicon-viloris.webp",
    apple: "/favicon-viloris.webp",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`dark ${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <ContactModalProvider>
          {children}
          <ModalContainer />
        </ContactModalProvider>
        <Analytics />
      </body>
    </html>
  );
}
