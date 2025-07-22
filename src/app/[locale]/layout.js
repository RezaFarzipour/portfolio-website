import { Geist, Geist_Mono } from "next/font/google";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "../../i18n/routing";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const vazirFont = Vazirmatn({
  variable: "--font-vazir",
  subsets: ["arabic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ًReza Farzipour |Frontend Developoer",
  description:
    "Welcome to my personal portfolio website. I'm Reza, a web developer specializing in modern JavaScript frameworks like React and Next.js.",
  keywords: [
    "Reza Farzipour",
    "web developer",
    "frontend developer",
    "React developer",
    "Next.js portfolio",
    "personal website",
    "JavaScript",
  ],
  authors: [{ name: "Reza Farzipour", url: "https://rezafarzipour.com" }],
  creator: "John Doe",
  metadataBase: new URL("https://rezafarzipour.com"),
  openGraph: {
    title: "Reza Farzipour | Frontend Developer",
    description:
      "Explore my portfolio website showcasing web projects built with React, Next.js, and more.",
    url: "https://rezafarzipour.com",
    siteName: "Reza Farzipour Portfolio",
    images: [
      {
        url: "https://rezafarzipour.com/images/cover.png",
        width: 1200,
        height: 630,
        alt: "John Doe Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={params.locale} dir={params.locale === "fa" ? "rtl" : "ltr"}>
      <body
        className={`${
          params.locale === "fa" ? vazirFont.variable : geistSans.variable
        } ${geistMono.variable} ${params.locale === "fa" ? "rtl" : "ltr"}`}
      >
        <video
 
          className="fixed top-0 left-0 w-full h-full object-cover -z-10 mix-blend-lighten pointer-events-none"
          loop
          autoPlay
          type="video/mp4"
          muted
          playsInline
          src="/videos/galaxy.mp4"

        ></video>
        {/* ویدیو و کامپوننت‌ها */}
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
