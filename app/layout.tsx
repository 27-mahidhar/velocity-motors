import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VELOCITY MOTORS — A curated collection of performance icons",
  description: "An appointment-led destination for exceptional luxury and performance cars. Discover the red Porsche 918 Spyder and a considered collection of automotive icons.",
  applicationName: "VELOCITY MOTORS",
  icons: { icon: "/velocity-logo.svg" },
  openGraph: {
    title: "VELOCITY MOTORS",
    description: "Born to perform. Designed to inspire.",
    type: "website"
  }
};

export const viewport: Viewport = {
  themeColor: "#08090a",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
