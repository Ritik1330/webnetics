import Image from "next/image";
import { CaseStudyHero } from "@/components/CaseStudies/CaseStudyHero";

export default function Kotak811CaseStudy() {
  return (
    <main className="min-h-screen">
      <CaseStudyHero />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Kotak 811 Case Study
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-8">
              How Kotak 811 took the help of emails and SMSs to promote their brand and scale growth.
            </h2>
            
            <div className="mb-12 relative rounded-xl overflow-hidden">
              <Image 
                src="/kotak-811-case-study.jpg" 
                alt="Kotak 811 Case Study" 
                width={1200} 
                height={675}
                className="w-full h-auto"
              />
            </div>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="mb-6">
                Kotak Mahindra Bank is an Indian private sector bank offering various banking services and products for both corporate and retail customers. It also provides specialized subsidiaries in multiple sectors, including personal finance, investment banking, general insurance, life insurance, as well as wealth management.
              </p>
              <p className="mb-6">
                Kotak 811 is their initiative to start the country's first downloadable digital bank account. It will allow customers to create a zero-balance digital bank account. Kotak 811 gives an annual interest of up to 6% to every Indian citizen. This account can be opened via a mobile application without having to visit the bank.
              </p>
              <p className="mb-6">
                The objective was to communicate that Kotak 811 bank account will be the first anywhere, anytime, digital bank account to every citizen of the country.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">Goals</h2>
              <p className="mb-4">The following are the goals to be achieved through this campaign:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Creating awareness about the Kotak 811 bank account amongst the customers, including its key features and benefits.</li>
                <li>Digital branding of the Kotak 811 bank account through email marketing and SMS marketing while targeting the correct audience.</li>
                <li>Telling the people that it is a seamless process to open the Kotak 811 bank account through the mobile app. Consequently prompting them to open their Kotak 811 account.</li>
                <li>Creating strategies so that customers keep their accounts operational while maintaining a decent balance in their new bank account.</li>
              </ul>
              <p className="mb-6">
                Kotak 811 received a great engagement rate during the 8 month-long promotional campaign amongst key competitors. With the help of the email and SMS marketing campaign, it was also able to open 70,000 Kotak 811 digital bank accounts.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">Approach</h2>
              <p className="mb-6">
                Since Kotak 811 bank account is a digital one, digital strategies needed to be adopted for branding and awareness campaign. Therefore, email marketing and SMS marketing were used for this campaign. Also, these methods helped provide an easy call-to-action option for faster processing.
              </p>
              <p className="mb-6">
                The campaign was executed, keeping in mind the digital natives as well as the digital migrants who are much tech-savvy but have access to the digital platforms. The campaign had to be innovative yet simple, for the greater masses.
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>17 crore emails were sent to the targeted audience based on their geographic location, age, gender, skills, jobs, and other such factors.</li>
                <li>Apart from the emails, 8 crores SMS were sent to the highly targeted audience for getting the best possible response.</li>
                <li>The campaign for creating awareness about the Kotak 811 digital bank accounts was in place for 8 months to reach the maximum number of people and get the best ROI, that is, more functional Kotak 811 accounts.</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">Results</h2>
              <p className="mb-4">In quantitative terms, the following are the outcomes:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>On the part of email marketing, there was a total of 7.5% aggregate opens by the users.</li>
                <li>Additionally, there were 3.7% aggregate clicks on the SMS sent as a part of the promotional campaign.</li>
                <li>Over a period of 8 months, we were able to open 70,000 bank accounts for the Kotak 811.</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">Conclusion</h2>
              <p className="mb-6">
                Kotak 811 received a great engagement rate during the 8 month-long promotional campaign amongst key competitors. With the help of the email and SMS marketing campaign, it was also able to open 70,000 Kotak 811 digital bank accounts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}