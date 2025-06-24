import Seo from "../components/service_pages/Seo";


export const metadata = {
  title: "Best SEO Agency Dubai | SEO Services in Dubai",
  description:
    "Rank higher with the best SEO agency in Dubai. Orionsols delivers proven SEO services in Dubai to boost your traffic, rankings, and online visibility.",
  keywords: [
    "SEO Dubai",
    "search engine optimization",
    "local SEO Dubai",
    "SEO agency Dubai",
    "increase website traffic",
  ],
  openGraph: {
    title: "Top SEO Services in Dubai",
    description:
      "Orionsols helps your business rank higher and reach more customers. Proven SEO strategies to grow your traffic and visibility.",
    type: "website",
    siteName: "Orionsols",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services in Dubai by Orionsols",
    description:
      "Get better rankings and more traffic with expert SEO strategies tailored for Dubai businesses.",
  },
  alternates: {
    canonical: "https://www.orionsols.com/seo-agency-dubai",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function SEOService() {
  return (
    <>
    <Seo/>
    </>
  );
}
