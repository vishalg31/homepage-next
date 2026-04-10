import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.vishalbuilds.com"),
  title: "Vishal Builds",
  description: "Data-driven tools that simplify complex decisions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vishal Builds",
    description: "Data-driven tools that simplify complex decisions.",
    url: "https://www.vishalbuilds.com",
    siteName: "Vishal Builds",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
