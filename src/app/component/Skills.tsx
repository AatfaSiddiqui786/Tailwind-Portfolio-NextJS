'use client'
import { useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaJs,  FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs } from 'react-icons/si';



const SkillsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -150, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 150, behavior: 'smooth' });
    }
  };
   return (
    <div className="bg-black text-white py-16" style={{ backgroundImage: "url('/images/newbg.jpg')" }}>
      <div className="container mx-auto px-10">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white-700 text-center mb-6"><u>My Skills</u></h2>
        <div className="w-36 h-1 mx-auto bg-pink-00 mb-12"></div> {/* Teal Line */}

        {/* Skills Container with Horizontal Scroll */}
        <div className="relative flex items-center">
          {/* Left Arrow (visible only on mobile) */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg--700 md:hidden"
            onClick={scrollLeft}
            aria-label="Scroll Left"
          >
            &#10094;
          </button>

          {/* Scrollable Skills Cards */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto px-4 py-2 scrollbar-hide md:overflow-x-hidden"
          >
            <SkillCard icon={<FaHtml5 />} title="HTML" description="" />
            <SkillCard icon={<FaCss3Alt />} title="CSS" description="" />
            <SkillCard icon={<SiTypescript />} title="TypeScript" description="" />
            <SkillCard icon={<FaJs />} title="JavaScript" description="" />
            <SkillCard icon={<SiNextdotjs />} title="Next.js" description="" />
            <SkillCard icon={<SiNextdotjs />} title="  Ms office" description="" />
            <SkillCard icon={<SiNextdotjs />} title=" In page" description="" />
            <SkillCard icon={<SiNextdotjs />} title=" Google slider" description="" />
            <SkillCard icon={<FaGitAlt />} title="Git" description="" />
            <SkillCard icon={<FaGitAlt />} title="canva design" description="" />
            <SkillCard icon={<FaGitAlt />} title="web development" description="" />
          </div>

          {/* Right Arrow (visible only on mobile) */}
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-pink-700 md:hidden"
            onClick={scrollRight}
            aria-label="Scroll Right"
          >
        
          </button>
        </div>
      </div>
    </div>
  );
};

interface SkillCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description }) => (
  <div className="min-w-[50px] bg-pink-800 text-white p-6 rounded-lg shadow-lg flex flex-col items-center hover:scale-100 transition-transform duration-400 md:animate-fadeIn md:hover:animate-bounceHover">
    <div className="text-2xl mb-2">{icon}</div>
    <h3 className="text-1xl font-semibold mb-1">{title}</h3>
    <p className="text-center text-sm">{description}</p>
  </div>
);

export default SkillsSection;
