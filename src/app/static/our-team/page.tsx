import type { NextPage } from 'next';
import Head from 'next/head';

const teamMembers = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    bio: "Digital marketing veteran with 15+ years of experience."
  },
  {
    name: "Sarah Johnson",
    role: "Head of Strategy",
    bio: "Former Google strategist specializing in growth marketing."
  },
  {
    name: "Michael Chen",
    role: "Technical Director",
    bio: "Expert in MarTech solutions and digital transformation."
  },
  {
    name: "Emma Davis",
    role: "Creative Director",
    bio: "Award-winning designer with a passion for brand storytelling."
  }
];

const OurTeamPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Our Team | Agon Digital</title>
        <meta name="description" content="Meet the talented professionals behind Agon Digital's success story." />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Our Team</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the innovative minds shaping the future of digital marketing.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-blue-600 mb-3">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default OurTeamPage;