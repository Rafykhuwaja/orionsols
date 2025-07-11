import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from "next/font/google";
import TawkTo from "./components/TawlkToo";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script"; // ⬅️ Add this
import { GA_TRACKING_ID } from "./lib/gtag"; // ⬅️ Add this
import Footer from "./components/Footer";

const lato = Raleway({
  weight: "400",
  display: "swap",
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "Orionsols - Digital Solutions & Business Growth Agency",
  description:
    "Orionsols is a Dubai-based digital solutions agency specializing in web development, mobile apps, SEO, branding, and e-commerce solutions to help businesses grow online.",
  keywords: [
    "Orionsols",
    "Digital Agency Dubai",
    "Web Development Dubai",
    "SEO Services",
    "E-commerce Solutions",
    "Business Growth",
    "Branding Agency",
    "Mobile App Development",
    "Content Marketing",
    "Creative Design",
  ],
  openGraph: {
    title: "Orionsols - Your Partner in Digital Success",
    description:
      "Boost your business with Orionsols. We offer expert web development, SEO, e-commerce, and branding services from Dubai to the world.",
    images: ["/images/favicon.ico"],
    url: "https://www.orionsols.com",
  },
  twitter: {
    title: "Orionsols - Digital Growth Experts",
    description:
      "Grow your business with top-notch digital solutions from Orionsols: web design, SEO, mobile apps, branding & more.",
    images: ["/images/favicon.ico"],
    card: "summary_large_image",
    creator: "@orionsols",
  },
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="avutSsJPoqgvjuDAvCZCD_hmxJGL1zy_cR4LtEn2fwA"
        />
        {/* Google Analytics Script */}
        {GA_TRACKING_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body id="background" className={`${lato.className} responsive-container no-scroll`}>
        {children}
        <Footer/>
        <SpeedInsights />
        <TawkTo />
      </body>
    </html>
  );
}
