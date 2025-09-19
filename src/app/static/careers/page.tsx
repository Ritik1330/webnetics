import type { NextPage } from 'next';
import Head from 'next/head';

const positions = [
  {
    title: "Senior Digital Marketing Strategist",
    department: "Marketing",
    location: "Remote"
  },
  {
    title: "Full Stack Developer",
    department: "Engineering",
    location: "London, UK"
  },
  {
    title: "Account Manager",
    department: "Client Services",
    location: "New York, USA"
  }
];

const CareersPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Careers | Agon Digital</title>
        <meta name="description" content="Join our team at Agon Digital and be part of the digital marketing revolution." />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Help us shape the future of digital marketing with innovative solutions.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Innovation First</h3>
            <p className="text-gray-600">Work with cutting-edge technologies and shape the future of digital marketing.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Growth Opportunities</h3>
            <p className="text-gray-600">Continuous learning and career development opportunities.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Great Culture</h3>
            <p className="text-gray-600">Work with passionate individuals in an inclusive environment.</p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
          <div className="space-y-4">
            {positions.map((position, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                <p className="text-gray-600 mb-4">
                  {position.department} · {position.location}
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default CareersPage;