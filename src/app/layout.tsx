import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>DHANIEL</title>
        <meta name="title" content="DHANIELCODES" />
        <link rel="icon" href="/icon/da.png" type="image/png" sizes="any" />
        <meta name="description" content="Frontend Engineer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dhaniel.site/" />
        <meta property="og:title" content="DHANIELCODES" />
        <meta property="og:description" content="Frontend Engineer" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/devdaniel/image/upload/v1674941276/Group_101_xjv7vk.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dhaniel.site/" />
        <meta property="twitter:title" content="DHANIELCODES" />
        <meta property="twitter:description" content="Frontend Engineer" />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/devdaniel/image/upload/v1674941276/Group_101_xjv7vk.png"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
