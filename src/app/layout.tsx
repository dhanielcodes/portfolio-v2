import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { yearsOfExperience } from "./data/content";

const gilroy = localFont({
  src: [
    { path: "./fonts/Gilroy-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/Gilroy-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Gilroy-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-gilroy",
  display: "swap",
});

const OG_IMAGE =
  "https://res.cloudinary.com/devdaniel/image/upload/v1674941276/Group_101_xjv7vk.png";

export const revalidate = 86400;

export const metadata: Metadata = {
  metadataBase: new URL("https://dhaniel.site"),
  title: "Daniel Adekoya, Senior Frontend Engineer",
  description: `Senior frontend and forward deployed engineer in Lagos. ${yearsOfExperience()}+ years building web and mobile products in React, Vue, TypeScript and React Native.`,
  icons: { icon: "/icon/da.png" },
  openGraph: {
    type: "website",
    url: "https://dhaniel.site/",
    title: "Daniel Adekoya, Senior Frontend Engineer",
    description: "I take products from idea to launch.",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Adekoya, Senior Frontend Engineer",
    description: "I take products from idea to launch.",
    images: [OG_IMAGE],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0d0d0c" },
    { media: "(prefers-color-scheme: light)", color: "#efebe3" },
  ],
};

// Runs before first paint so the saved (or light-mode) theme never flashes.
const themeScript = `(function(){try{var t=localStorage.getItem('dhaniel-theme');if(t!=='Ink'&&t!=='Bone'&&t!=='Clay'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'Bone':'Ink';}document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='Ink';}if(!(window.CSS&&CSS.supports&&CSS.supports('animation-timeline: view()'))){document.documentElement.classList.add('no-sdt');}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="Ink" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&display=swap"
        />
      </head>
      <body className={gilroy.variable}>{children}</body>
    </html>
  );
}
