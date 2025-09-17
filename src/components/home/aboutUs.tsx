import { BackgroundLines } from "@/components/ui/background-lines";
import { Send } from "lucide-react";

export function AboutUs() {
  return (
    <div>
      {/* About Us Content with BackgroundLines */}
      <BackgroundLines className="py-1 px-4 !h-auto min-h-[40rem] flex items-center justify-center">
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Header with decorative line */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-0.5 bg-orange-400 mr-4"></div>
              <div className="w-3 h-0.5 bg-orange-400 mr-2"></div>
              <div className="w-6 h-0.5 bg-orange-400"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
              ABOUT US
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p className="text-center">
              Team{" "}
              <span className="text-orange-500 font-semibold">
                WebNetics ads
              </span>{" "}
              has a mission of sharing profits with advertisers as well as
              publishers where we focus on minimizing the cost of our
              advertisers by providing the best marketing and promotional
              solutions to promote their brand and maximize their performance.
              At the same time we benefit our publishers by providing them
              converting offers at best payouts to optimize their traffic and
              make high revenues.
            </p>

            <p className="text-center">
              At{" "}
              <span className="text-orange-500 font-semibold">
                WebNetics ads
              </span>
              , we take great pride in our ability to help publishers monetize
              their traffic by promoting some of the biggest brands in media and
              advertising. For advertisers, at the same time we partner with
              them to increase there market share, lower acquisition costs and
              strengthen the lifetime value of their customer relationships.
            </p>

            <p className="text-center">
              We understand that our success as a company is ultimately linked
              to the success of our clients. Therefore, we are committed to
              providing each client, regardless of size, the resources, and
              expertise needed to thrive in the online marketplace.
            </p>

            <p className="text-center">
              We are in a process to provide cutting-edge digital strategies for
              clients across several diverse industries, including e-commerce,
              finance, health & wellness, retail, entertainment, automotive,
              dating and telecommunications.
            </p>
          </div>
        </div>
      </BackgroundLines>

      {/* Advertisers and Publishers Cards - Outside AnimatedDotsBackground */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Advertisers Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg relative overflow-hidden">
              {/* Icon */}
              <div className="mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Ad</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Advertisers
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "We focus on long term partnership with our clients" which means
                that our ultimate goal is to provide regular ROI.
              </p>
              <button
                type="button"
                className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
              >
                READ MORE
              </button>
            </div>

            {/* Publishers Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg relative overflow-hidden">
              {/* Icon */}
              <div className="mb-6">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <Send className="w-6 h-6 text-blue-500" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Publishers
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                For our exclusive delivery partner we arrange calls or meeting
                with our advertisers where the agenda is to plan as to how to
                scale and optimise the campaign to its optimum level and discuss
                the issues if any.
              </p>
              <button
                type="button"
                className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
              >
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
