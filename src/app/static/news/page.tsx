import type { NextPage } from 'next';
import Head from 'next/head';

const newsArticles = [
  {
    date: "2024-03-15",
    category: "Company News",
    title: "Agon Digital Expands Global Presence",
    summary: "Opening new offices in Asia to better serve our growing client base."
  },
  {
    date: "2024-03-10",
    category: "Industry Insights",
    title: "The Future of Digital Marketing",
    summary: "Our analysis of emerging trends shaping the industry."
  },
  {
    date: "2024-03-05",
    category: "Case Study",
    title: "Success Story: Global Brand Campaign",
    summary: "How we helped a major brand achieve 300% ROI."
  }
];

const NewsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>News | Agon Digital</title>
        <meta name="description" content="Stay updated with the latest news and insights from Agon Digital." />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Latest News</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest developments and industry insights.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newsArticles.map((article, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <span className="text-sm text-blue-600">{article.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.summary}</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </section>

        <section className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-6">Get the latest updates delivered straight to your inbox.</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-full text-gray-900"
            />
            <button className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default NewsPage;