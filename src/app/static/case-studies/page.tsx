import type { NextPage } from 'next';
import Head from 'next/head';

const caseStudies = [
  {
    title: "Global E-commerce Growth",
    category: "Digital Marketing",
    description: "How we helped an e-commerce brand achieve 200% growth in 6 months.",
    results: ["200% Revenue Growth", "150% Traffic Increase", "3x ROI"]
  },
  {
    title: "B2B Lead Generation",
    category: "Marketing Strategy",
    description: "Transforming B2B lead generation through targeted digital campaigns.",
    results: ["400+ Qualified Leads", "45% Conversion Rate", "2.5x Pipeline Growth"]
  },
  {
    title: "Brand Awareness Campaign",
    category: "Advertising",
    description: "Creating a viral brand awareness campaign for a startup.",
    results: ["1M+ Social Impressions", "300% Brand Awareness", "50% Engagement Rate"]
  },
  {
    title: "SaaS Marketing Success",
    category: "Digital Strategy",
    description: "Helping a SaaS company dominate their market niche.",
    results: ["80% MRR Growth", "60% CAC Reduction", "4x Customer Base"]
  }
];

const CaseStudiesPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Case Studies | Agon Digital</title>
        <meta name="description" content="Explore our successful digital marketing campaigns and client success stories." />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how we've helped businesses achieve extraordinary results through innovative digital marketing strategies.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm mb-4">
                  {study.category}
                </span>
                <h3 className="text-2xl font-bold mb-3">{study.title}</h3>
                <p className="text-gray-600 mb-6">{study.description}</p>
                <div className="space-y-2">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <span className="mr-2">•</span>
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Achieve Similar Results?</h2>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition-colors">
            Contact Us Today
          </button>
        </section>
      </main>
    </>
  );
};

export default CaseStudiesPage;