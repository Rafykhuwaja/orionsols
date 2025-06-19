
import Graphic_design from "../components/service_pages/Graphic_design";


export const metadata = {
  title: "Graphic Design Company in Dubai | Graphic Designer Dubai",
  description:
    "Leading graphic design company in Dubai with expert graphic designers creating unique visuals that boost your brand identity and presence.",
  keywords: [
    "graphic design Dubai",
    "branding design",
    "social media graphics",
    "logo design Dubai",
    "visual identity Dubai",
  ],
  openGraph: {
    title: "Graphic Design Services in Dubai",
    description:
      "Boost your brand’s presence with expert graphic design services in Dubai. From logos to full brand identity, Orionsols delivers visual impact.",
    type: "website",
    siteName: "Orionsols",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Graphic Design Company in Dubai",
    description:
      "Stand out with professional design by Orionsols. Logos, branding, and custom visuals tailored to your business.",
  },
  alternates: {
    canonical: "https://orionsols.com/graphic-design-company-dubai",
  },
};


export default function GraphicDesignService() {
  return (
    <>
    <Graphic_design/>
    </>
  );
}