import { Work_Sans, Quicksand } from "next/font/google";

// Body font (replace Quicksand if you choose something else)
export const bodyFont = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Heading font
export const headingFont = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
});
