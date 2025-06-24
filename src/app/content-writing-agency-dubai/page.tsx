import Content_writing from "../components/service_pages/content_writing";



export const metadata = {
  title: "Content Writing Agency Dubai | Content Writer Dubai",
  description:
    "Expert content writing agency in Dubai. Our professional content writers deliver engaging, SEO-friendly content tailored to your business needs.",
  keywords: [
    "content writing Dubai",
    "SEO content writer",
    "website copywriting",
    "blog writing Dubai",
    "professional content services",
  ],
  openGraph: {
    title: "Content Writing Services in Dubai",
    description:
      "Drive results with compelling, SEO-optimized content. Orionsols offers expert writing services for websites, blogs, and more.",
    type: "website",
    siteName: "Orionsols",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Content Writing Agency in Dubai",
    description:
      "Engage your audience with clear, compelling, and conversion-focused content from Orionsols’ expert writers.",
  },
  alternates: {
    canonical: "https://www.orionsols.com/content-writing-agency-dubai",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function ContentCreationService() {
  return (
    <div>
      <Content_writing/>
    </div>
  );
}