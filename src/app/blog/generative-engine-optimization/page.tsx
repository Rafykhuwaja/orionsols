import Navbar2 from "@/app/components/Navbar2";
import Image from "next/image";


export const metadata = {
  title: "Generative Engine Optimization (GEO): The Future of Search Has Evolved",
  description:
    "Learn what Generative Engine Optimization (GEO) is and how to optimize your content for AI platforms like ChatGPT, Perplexity, and Google SGE.",
  openGraph: {
    title: "Generative Engine Optimization (GEO): The Future of Search Has Evolved",
    description:
      "Learn what Generative Engine Optimization (GEO) is and how to optimize your content for AI platforms like ChatGPT, Perplexity, and Google SGE.",
    images: [
      {
        url: "/images/geo-blog/geo.jpg",
        width: 800,
        height: 600,
        alt: "Generative Engine Optimization illustration",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  robots: {
    index: true,
    follow: true,
  },
};



export default function Page() {
  return (
    <div>
      <Navbar2 />
      <div className="text-white md:px-[200px] md:py-[100px] px-4 py-6">
        <h1 className="text-[#b8a9fe] text-3xl md:text-5xl font-bold mb-6">
          Geo.tv: Pakistan’s Top News Portal Breaking Records in June 2024
        </h1>

        <p className="text-lg">
          In June 2024, <strong>Geo.tv</strong> achieved a major milestone, becoming Pakistan’s most visited website in the News & Media category with over <strong>189 million pageviews</strong> and <strong>27 million unique visitors</strong>. According to <strong>Similarweb</strong>, this historic moment reflects the public’s trust in Geo’s reliable news coverage.
        </p>

        <h2 className="text-[#b8a9fe] text-2xl font-semibold mt-8">
          Why Did Geo.tv Break Records?
        </h2>
        <p className="text-lg">
          The record-breaking performance is due to a combination of breaking news coverage, exclusive stories, and real-time election reporting during a politically active time in Pakistan.
        </p>

        <h3 className="text-xl font-semibold mt-6">Key Stats from Similarweb (June 2024)</h3>
        <ul className="list-disc ml-6 text-lg space-y-2">
          <li>27.1 million unique visitors</li>
          <li>189.6 million pageviews</li>
          <li>Average visit duration: 6 minutes</li>
          <li>Top referring sites: Facebook, Google, YouTube</li>
        </ul>

        <div className="flex justify-center my-10">
          <Image
            src="/images/geo-blog/geo.jpg"
            alt="Geo.tv stats June 2024"
            width={1000}
            height={600}
            className="rounded shadow-lg w-full h-auto"
          />
        </div>

        <h2 className="text-[#b8a9fe] text-2xl font-semibold mt-8">
          Geo’s Digital Growth Strategy
        </h2>
        <p className="text-lg">
          Geo Digital’s success is powered by strategic SEO, data journalism, and a robust social media presence that connects millions of Pakistanis daily.
        </p>

        <h2 className="text-[#b8a9fe] text-2xl font-semibold mt-10">
          FAQs About Geo.tv’s Success
        </h2>
        <div className="space-y-4 mt-4">
          <div>
            <h3 className="font-semibold">1. How did Geo.tv surpass competitors?</h3>
            <p>With a focus on real-time reporting, multimedia integration, and accurate journalism, Geo attracted a massive digital audience.</p>
          </div>
          <div>
            <h3 className="font-semibold">2. Is this growth sustainable?</h3>
            <p>Yes, continued investment in technology and editorial teams makes Geo’s dominance likely to continue.</p>
          </div>
          <div>
            <h3 className="font-semibold">3. What makes Geo Digital unique?</h3>
            <p>Geo combines traditional journalism values with modern digital tools to lead in Pakistan’s news ecosystem.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
