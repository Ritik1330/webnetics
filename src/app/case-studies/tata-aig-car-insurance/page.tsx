import Image from "next/image";
import { CaseStudyHero } from "@/components/CaseStudies/CaseStudyHero";

export default function TataAIGCaseStudy() {
  return (
    <main className="min-h-screen">
      <CaseStudyHero />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tata AIG Car Insurance Case Study
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-8">
              How Tata AIG leveraged digital marketing to increase car insurance policy sales
            </h2>
            
            <div className="mb-12 relative rounded-xl overflow-hidden">
              <Image 
                src="/tata-aig-case-study.jpg" 
                alt="Tata AIG Car Insurance Case Study" 
                width={1200} 
                height={675}
                className="w-full h-auto"
              />
            </div>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="mb-6">
                Tata AIG General Insurance Company Limited is a joint venture between the Tata Group and American International Group (AIG). The company offers a comprehensive range of insurance products, including car insurance, health insurance, travel insurance, and more.
              </p>
              <p className="mb-6">
                In a highly competitive car insurance market, Tata AIG needed to increase their policy sales and market share. They approached us to develop a comprehensive digital marketing strategy that would help them reach potential customers at the right time with the right message.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">Goals</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Increase car insurance policy sales by 30% within 6 months</li>
                <li>Improve brand awareness and recall among target audience</li>
                <li>Reduce customer acquisition cost by 20%</li>
                <li>Enhance digital customer experience to improve conversion rates</li>
                <li>Build a data-driven marketing approach for better targeting</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">Approach</h2>
              <p className="mb-6">
                We developed a multi-channel digital marketing strategy focusing on reaching potential customers at different stages of their insurance buying journey:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Implemented targeted SEO strategies to capture high-intent search traffic</li>
                <li>Created personalized email campaigns based on user behavior and preferences</li>
                <li>Developed a comprehensive content marketing strategy focusing on car safety, maintenance tips, and insurance benefits</li>
                <li>Launched targeted social media campaigns with custom audience segmentation</li>
                <li>Utilized programmatic advertising to reach potential customers with personalized messaging</li>
                <li>Implemented a retargeting strategy to re-engage users who showed interest but didn't convert</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">Results</h2>
              <p className="mb-4">The campaign delivered exceptional results across all key metrics:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>42% increase in car insurance policy sales, exceeding the target by 12%</li>
                <li>35% improvement in brand awareness metrics</li>
                <li>25% reduction in customer acquisition cost</li>
                <li>68% increase in organic traffic to car insurance pages</li>
                <li>3.2x improvement in conversion rate from digital channels</li>
                <li>22% increase in average policy value</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">Conclusion</h2>
              <p className="mb-6">
                Our comprehensive digital marketing approach helped Tata AIG significantly increase their car insurance policy sales while reducing acquisition costs. By focusing on personalized messaging and targeting users at different stages of their buying journey, we were able to not only increase the number of policies sold but also improve the average policy value.
              </p>
              <p className="mb-6">
                The data-driven approach we implemented continues to provide valuable insights for ongoing campaign optimization, ensuring sustainable growth for Tata AIG's car insurance business.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}