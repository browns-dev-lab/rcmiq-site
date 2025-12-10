import "./globals.css";
import { bodyFont, headingFont } from "./fonts";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bodyFont.className} ${headingFont.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
