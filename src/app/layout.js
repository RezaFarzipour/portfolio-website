import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 mix-blend-lighten pointer-events-none"
          loop
          autoPlay
          type="video/mp4"
          muted
          plays-inline="true"
          src="/videos/galaxy.mp4"
        ></video>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
