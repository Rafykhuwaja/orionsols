import Ppc from "../components/service_pages/Ppc";



export const metadata = {
  title: "Best PPC Agency in Dubai | PPC Services Dubai",
  description:
    "Drive instant leads with the best PPC agency in Dubai. We offer data-driven PPC services in Dubai that maximize ROI and conversions.",
  keywords: [
    "PPC Dubai",
    "paid ads agency",
    "Google Ads Dubai",
    "pay-per-click Dubai",
    "PPC marketing services",
  ],
  openGraph: {
    title: "PPC Services in Dubai | Orionsols",
    description:
      "Maximize your ROI with high-converting PPC campaigns. Orionsols delivers targeted ad strategies for instant business growth.",
    type: "website",
    siteName: "Orionsols",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top PPC Agency in Dubai | Orionsols",
    description:
      "Run smarter PPC campaigns and get faster results with data-driven strategies from Orionsols.",
  },
  alternates: {
    canonical: "https://orionsols.com/ppc-agency-dubai",
  },
};

export default function PPCService() {
  return (
    <>
    <Ppc/>
    </>
  );
}