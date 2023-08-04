import "./globals.css";
import Navbar from "./components/Navbar";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "diskusi",
  description: "Make meaningful discussions with other people.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="roboto.className tracking-tight">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
