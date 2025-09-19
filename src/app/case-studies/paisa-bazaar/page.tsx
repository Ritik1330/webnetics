import Image from "next/image";
import { CaseStudyHero } from "@/components/CaseStudies/CaseStudyHero";

export default function PaisaBazaarCaseStudy() {
  return (
    <main className="min-h-screen">
      <CaseStudyHero />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Paisa Bazaar Case Study
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-8">
              How Paisa Bazaar transformed their digital presence to become India's leading financial marketplace
            </h2>
            
            <div className="mb-12 relative rounded-xl overflow-hidden">
              <Image 
                src="/paisa-bazaar-case-study.jpg" 
                alt="Paisa Bazaar Case Study" 
                width={1200} 
                height={675}
                className="w-full h-auto"
              />
            </div>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="mb-6">
                Paisa Bazaar is India's leading online marketplace for financial products, offering a wide range of services including loans, credit cards, insurance, and investment products. As a fintech pioneer, they needed to establish trust while reaching a diverse audience across India.
              </p>
              <p className="mb-6">
                Despite having a strong product offering, Paisa Bazaar faced challenges in building brand awareness, generating quality leads, and optimizing their conversion funnel in a highly competitive market.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">Goals</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Increase organic traffic by 50% within 12 months</li>
                <li>Improve lead quality and conversion rates across all financial products</li>
                <li>Establish Paisa Bazaar as a trusted authority in the financial services sector</li>
                <li>Optimize customer acquisition costs across digital channels</li>
                <li>Enhance user experience to reduce drop-offs in the application process</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">Approach</h2>
              <p className="mb-6">
                We developed a comprehensive digital strategy focusing on multiple channels:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Implemented an in-depth SEO strategy targeting high-value financial keywords</li>
                <li>Created a content hub with educational resources on personal finance topics</li>
                <li>Developed a data-driven PPC campaign structure with advanced audience segmentation</li>
                <li>Launched personalized email marketing campaigns based on user interests and behavior</li>
                <li>Optimized the user journey with A/B testing and conversion rate optimization</li>
                <li>Utilized social proof and testimonials to build trust and credibility</li>
                <li>Implemented a comprehensive remarketing strategy across channels</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">Results</h2>
              <p className="mb-4">Our strategy delivered exceptional results across all key metrics:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>78% increase in organic traffic, exceeding the target by 28%</li>
                <li>65% improvement in lead quality as measured by conversion to application</li>
                <li>42% reduction in cost per acquisition across digital channels</li>
                <li>3.5x increase in blog traffic with 45% of readers exploring product pages</li>
                <li>52% improvement in application completion rate through UX optimizations</li>
                <li>35% increase in brand search volume indicating stronger brand awareness</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">Conclusion</h2>
              <p className="mb-6">
                Our integrated digital marketing approach helped Paisa Bazaar significantly improve their market position and establish themselves as a trusted financial marketplace in India. By focusing on educational content, user experience, and data-driven optimization, we were able to not only increase traffic but also improve the quality of leads and reduce acquisition costs.
              </p>
              <p className="mb-6">
                The strategies implemented continue to provide sustainable growth for Paisa Bazaar, with ongoing optimizations further improving performance across all channels.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}