import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "@/components/navbar";
import FixedIcons from "@/components/fixedicons";
import Footer from "@/components/footer";
import Scroolfunction from "@/components/scroolfunction";


const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Concept Learning",
  description: "Concept Learning School",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="">
        <main >
        <Navbar/>
      <FixedIcons/>
        {children}
        <Footer/>
        </main>
        <Scroolfunction/>
      </body>
    </html>
  );
}
