import "./globals.css";
import { Inter, Mulish, Montserrat } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Just For Paws",
  description: "Dog shelter in Singapore",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/justforpaws_logo.png" />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
