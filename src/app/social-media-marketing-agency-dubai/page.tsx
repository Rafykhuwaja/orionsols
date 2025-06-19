import Social_media_marketing from "../components/service_pages/Social_media_marketing";


export const metadata = {
  title: "Social Media Marketing Agency in Dubai | SMM Agency Dubai",
  description:
    "Top-rated social media marketing agency in Dubai. Our SMM agency helps grow your brand, engage audiences & increase leads across all platforms.",
  keywords: [
    "social media marketing Dubai",
    "SMM agency Dubai",
    "Instagram marketing Dubai",
    "Facebook ads Dubai",
    "social media growth Dubai",
  ],
  openGraph: {
    title: "Top Social Media Marketing Agency in Dubai",
    description:
      "Grow your brand and generate leads with SMM services from Orionsols. Expert strategy and content across all platforms.",
    type: "website",
    siteName: "Orionsols",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SMM Agency Dubai - Orionsols",
    description:
      "Boost engagement and brand awareness through powerful social media marketing strategies tailored for your business.",
  },
  alternates: {
    canonical: "https://orionsols.com/social-media-marketing-agency-dubai",
  },
};


export default function SocialMediaMarketingService() {
  return (
  <>
  <Social_media_marketing/>
  </>
  );
}