import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Montserrat } from "next/font/google";



export const metadata: Metadata = {
  title: 'UTVRDA d.o.o. | Građevinska tvrtka Višnjevac',
  description: 'UTVRDA d.o.o. - profesionalna građevinska tvrtka iz Višnjevca. Nudimo novogradnju, renovacije i održavanje objekata.',
  openGraph: {
    "title": "UTVRDA d.o.o. - Vaš partner u gradnji",
    "description": "Pouzdan partner za sve vaše građevinske projekte u Višnjevcu.",
    "siteName": "UTVRDA d.o.o.",
    "type": "website"
  },
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${montserrat.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
