import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const openSauce = localFont({
  src: [
    {
      path: "../../public/fonts/OpenSauceOne-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/OpenSauceOne-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/OpenSauceOne-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/OpenSauceOne-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-open-sauce",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Speklr.",
  description: "Spekler Builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${openSauce.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
