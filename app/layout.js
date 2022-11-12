import "../styles/globals.css";
import { Space_Grotesk } from "@next/font/google";
import Navigation from "./components/Navigation";

const font = Space_Grotesk({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-grotesk",
});

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className={font.variable}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
