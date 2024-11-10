

import Link from 'next/link';

const AboutMe: React.FC = () => {
  return (

    <div className="animate-slide-left">
    <div className="relative bg-gradient-to-r from-blue-800 to-black text-white py-12 rounded-lg">
      <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url(/images/pink.png)' }}></div>
      <div className="relative z-10 container mx-auto px-6 sm:px-8 md:px-12 lg:px-24 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">About Me</h3>
        <p className="text-base sm:text-lg mb-6">
        Hello! I am currently a student at GIAC, specializing in Artificial Intelligence (AI) and Metaverse 3.0. Through this program, I am gaining insights into cutting-edge technologies that are transforming how we experience and interact within digital environments. My studies focus on learning how AI can create smarter, more interactive virtual spaces and immersive experiences, preparing me to innovate in the tech world
        contribute meaningfully to both digital and commercial industries.

Greetings! I am a dedicated student specializing in Artificial Intelligence, Metaverse 3.0, and Commerce. This website serves as a platform to share my academic journey, insights, and projects as I explore innovative intersections between technology and business. I invite you to explore my work and discover my passion for creating impactful digital solutions. Thank you for visiting!


        </p>
        <Link href="/about" passHref>
          <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg border-2  border-teal-700 hover:bg-teal-700 transition duration-300">
            Read More
          </button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default AboutMe;
