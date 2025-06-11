import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Basel Ashraf | Front-End Developer",
  description: "The portfolio of Basel Ashraf, a creative front-end developer skilled in React, Next.js, and UI design.",
  keywords: [
    "Basel Ashraf",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "Web Developer Portfolio",
    "UI Design",
    "Frontend Engineer"
  ],
  openGraph: {
    title: "Basel Ashraf | Front-End Developer",
    description: "Explore projects and skills of Basel Ashraf, a modern frontend engineer.",
    images: ["/og-image.png"], // لو عندك صورة تظهر في مشاركة الروابط
    url: "https://your-portfolio.com", // غيّرها للرابط الحقيقي
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full bg-black min-h-screen">
        <Header />
        <main >{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
