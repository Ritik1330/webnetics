/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all assist/source/organizeImports: <explanation> */
import { siInstagram, siGoogleadsense } from "simple-icons";
import { ChatBubbleIcon, ExclamationTriangleIcon } from "@radix-ui/react-icons";
import {
  RocketIcon,
  ClipboardListIcon,
  LaptopIcon,
  TrendingUpIcon,
  GlobeIcon,
  TargetIcon,
  MailIcon,
  MessageSquareIcon,
} from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShineBorder } from "../ui/shine-border";
import { OrbitingCircles } from "../ui/orbiting-circles";
import {
  AdIcon,
  ChatIcon,
  EmailIcon,
  HashIcon,
  PawIcon,
  PaperPlaneIcon,
  DesktopIcon,
  MobileIcon,
} from "@/assets/svg";

export function OrbitingCirclesDemo() {
  const centerContent = (
    <div className="text-center">
      {/* <DownloadIcon className="w-10 h-10 text-orange-500 mx-auto mb-2" /> */}
      <div className="text-3xl font-bold text-orange-500">405</div>
      <div className="text-sm text-gray-600 uppercase tracking-wide">
        App Downloads
      </div>
    </div>
  );

  const statistics = [
    { number: "500", label: "Happy Clients" },
    { number: "200", label: "Finished Projects" },
    { number: "2000", label: "Published Game" },
    { number: "1000", label: "Monthly New Campaigns" },
  ];

  return (
    <div className="w-full bg-gray-100 rounded-2xl overflow-hidden p-4 md:p-8">
      {/* Mobile Layout - Stack vertically */}
      <div className="block lg:hidden">
        {/* Top Statistics */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {statistics.slice(0, 2).map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gray-800">
                {stat.number}
                <span className="text-orange-500 text-sm">+</span>
              </div>
              <div className="text-xs text-gray-600 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Orbiting Circles */}
        <div className="flex justify-center mb-8">
          <div className="h-[300px] w-[300px] flex items-center justify-center">
            <OrbitingCircles
              radius={120}
              iconSize={50}
              centerContent={centerContent}
            >
              <PawIcon className="w-10 h-10 text-orange-500" />
              <MobileIcon className="w-10 h-10 text-orange-500" />
              <DesktopIcon className="w-10 h-10 text-orange-500" />
              <ChatIcon className="w-10 h-10 text-orange-500" />
              <HashIcon className="w-10 h-10 text-orange-500" />
              <PaperPlaneIcon className="w-10 h-10 text-orange-500" />
              <EmailIcon className="w-10 h-10 text-orange-500" />
              <AdIcon />
            </OrbitingCircles>
          </div>
        </div>

        {/* Bottom Statistics */}
        <div className="grid grid-cols-2 gap-4">
          {statistics.slice(2, 4).map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gray-800">
                {stat.number}
                <span className="text-orange-500 text-sm">+</span>
              </div>
              <div className="text-xs text-gray-600 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout - Grid with center circle */}
      <div className="hidden lg:grid lg:grid-cols-3 lg:grid-rows-3 gap-4 h-[500px]">
        {/* Top Left */}
        <div className="flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-800">
              500<span className="text-orange-500 text-sm">+</span>
            </div>
            <div className="text-xs text-gray-600 uppercase tracking-wide">
              Happy Clients
            </div>
          </div>
        </div>

        {/* Top Center - Empty */}
        <div></div>

        {/* Top Right */}
        <div className="flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-800">
              200<span className="text-orange-500 text-sm">+</span>
            </div>
            <div className="text-xs text-gray-600 uppercase tracking-wide">
              Finished Projects
            </div>
          </div>
        </div>

        {/* Middle Left - Empty */}
        <div></div>

        {/* Center - Orbiting Circles */}
        <div className="flex items-center justify-center">
          <div className="h-[400px] w-[400px] flex items-center justify-center">
            <OrbitingCircles
              radius={200}
              iconSize={100}
              centerContent={centerContent}
            >
              <PawIcon className="w-10 h-10 text-orange-500" />
              <MobileIcon className="w-10 h-10 text-orange-500" />
              <DesktopIcon className="w-10  h-10 text-orange-500" />
              <ChatIcon className="w-10 h-10 text-orange-500" />
              <HashIcon className="w-10 h-10 text-orange-500" />
              <PaperPlaneIcon className="w-10 h-10 text-orange-500" />
              <EmailIcon className="w-10 h-10 text-orange-500" />
              <AdIcon />
            </OrbitingCircles>
          </div>
        </div>

        {/* Middle Right - Empty */}
        <div></div>

        {/* Bottom Left */}
        <div className="flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-800">
              2000<span className="text-orange-500 text-sm">+</span>
            </div>
            <div className="text-xs text-gray-600 uppercase tracking-wide">
              Published Game
            </div>
          </div>
        </div>

        {/* Bottom Center - Empty */}
        <div></div>

        {/* Bottom Right */}
        <div className="flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-800">
              1000<span className="text-orange-500 text-sm">+</span>
            </div>
            <div className="text-xs text-gray-600 uppercase tracking-wide">
              Monthly New Campaigns
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function OurServices() {
  const services = [
    {
      id: "influencer-marketing",
      title: "Influencer Marketing",
      description:
        "Select your audience, define your target position on every app store list and we'll do the rest.",
      icon: <RocketIcon className="w-8 h-8 text-blue-500" />,
    },
    {
      id: "lead-generation",
      title: "Lead Generation",
      description:
        "For a long-term relationship, we need to keep delivering valid, qualified and high converting leads every single month.",
      icon: <ClipboardListIcon className="w-8 h-8 text-blue-500" />,
    },
    {
      id: "programmatic",
      title: "Programmatic",
      description:
        "The largest Permission Email Marketing Database Network in the world totally opt-in and compliant with GDPR.",
      icon: <LaptopIcon className="w-8 h-8 text-blue-500" />,
    },
    {
      id: "performance-marketing",
      title: "Digital Marketing",
      description:
        "Finding the best match between people with the right influence and your brand values, all supported by powerful technology.",
      icon: <TrendingUpIcon className="w-8 h-8 text-blue-500" />,
    },
    {
      id: "brand-awareness",
      title: "Brand Awareness",
      description:
        "More sales provided by one of the largest site networks in the world keeping your brand in your audience minds.",
      icon: <GlobeIcon className="w-8 h-8 text-blue-500" />,
    },
    {
      id: "social-media",
      title: "Social Media",
      description:
        "Strategic planning choosing the best channels and platforms to spread your brand values to the right audience.",
      icon: (
        <svg
          role="img"
          viewBox="0 0 24 24"
          className="w-8 h-8 text-blue-500"
          fill="currentColor"
        >
          <title>Instagram</title>
          <path d={siInstagram.path} />
        </svg>
      ),
    },
    {
      id: "retargeting",
      title: "Retargeting",
      description:
        "Select your audience, define your target position on every app store list and we'll do the rest.",
      icon: <TargetIcon className="w-8 h-8 text-blue-500" />,
    },
    {
      id: "email-marketing",
      title: "Email Marketing",
      description:
        "Reach your audience directly with targeted email campaigns and newsletters.",
      icon: <MailIcon className="w-8 h-8 text-blue-500" />,
    },
    {
      id: "chat-support",
      title: "Chat Support",
      description:
        "Provide instant support and engagement through live chat solutions.",
      icon: <MessageSquareIcon className="w-8 h-8 text-blue-500" />,
    },
    {
      id: "whatsapp-marketing",
      title: "WhatsApp Marketing",
      description:
        "Engage with your customers through WhatsApp Business API, broadcast messages, and automated responses.",
      icon: <MessageSquareIcon className="w-8 h-8 text-green-500" />,
    },
    {
      id: "facebook-marketing",
      title: "Facebook Marketing",
      description:
        "Reach and engage your target audience through strategic Facebook ads and content marketing campaigns.",
      icon: (
        <svg
          role="img"
          viewBox="0 0 24 24"
          className="w-8 h-8 text-blue-500"
          fill="currentColor"
          aria-labelledby="facebookTitle"
        >
          <title id="facebookTitle">Facebook</title>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      id: "google-ads",
      title: "Google Ads",
      description:
        "Boost your visibility and reach with targeted Google Ads campaigns.",
      icon: (
        <svg
          role="img"
          viewBox="0 0 24 24"
          className="w-8 h-8 text-blue-500"
          fill="currentColor"
        >
          <title>GitHub</title>
          <path d={siGoogleadsense.path} />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Services Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-orange-400 mr-4"></div>
            <div className="w-3 h-0.5 bg-orange-400 mr-2"></div>
            <div className="w-6 h-0.5 bg-orange-400"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            OUR SERVICES
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service) => (
            <Card
              key={service.id}
              className="relative overflow-hidden max-w-[350px] w-full mx-auto"
            >
              <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
              <CardHeader className="items-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 mb-2 text-center">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed text-center">
                  {service.description}
                </CardDescription>
              </CardHeader>
              {/* Optionally add CardContent or CardFooter if needed */}
            </Card>
          ))}
        </div>

        {/* Orbiting Circles Section */}
        <div>
          <OrbitingCirclesDemo />
        </div>
      </div>
    </section>
  );
}
