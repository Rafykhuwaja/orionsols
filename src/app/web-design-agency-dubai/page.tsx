import Web_development from "../components/service_pages/Web_development";



export const metadata = {
  title: "Web Design Agency Dubai | Web Design Services Dubai",
  description:
    "Top web design agency in Dubai offering responsive, user-focused web design services. Build stunning websites that drive results with Orionsols.",
  keywords: [
    "web design Dubai",
    "responsive web design",
    "UX UI design Dubai",
    "custom website Dubai",
    "web design agency Dubai",
  ],
  openGraph: {
    title: "Web Design Services in Dubai",
    description:
      "Get user-focused, responsive websites from the top web design agency in Dubai. Orionsols builds stunning websites that convert.",
    type: "website",
    siteName: "Orionsols",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Web Design Agency in Dubai",
    description:
      "Build stunning, user-focused websites with Orionsols. Discover our top-rated web design services in Dubai.",
  },
  alternates: {
    canonical: "https://www.orionsols.com/web-design-agency-dubai",
  },
  robots: {
    index: true,
    follow: true,
  },
};




export default function WebsiteDevelopmentService() {
  return (
    <div>
      <Web_development/>
    </div>
  );
}
