import Image from 'next/image';
import { FaLink, FaGithub, FaLaptopCode } from 'react-icons/fa';
import Link from 'next/link';

interface Project {
  name: string;
  image: string;
  link: string;
  description: string;
  github?: string;
}

const Content: React.FC = () => {
  const projects: Project[] = [
    { 
      name: 'Blog', 
      image: '/images/blog-t.jpg', 
      link: 'https://project1.com', 
      description: 'A modern blog website built with React and Next.js for better performance.' 
    },
    { 
      name: 'E-commerce', 
      image: '/images/ecommerce.jpeg', 
      link: 'https://project2.com', 
      description: 'A full-stack ecommerce website built with HTML, CSS, and JavaScript.' 
    },
    { 
      name: 'Portfolio', 
      image: '/images/port.jpg', 
      link: 'https://project3.com', 
      description: 'A dynamic portfolio website with animations and a smooth user experience.' 
    },
  ];

  return (
    <div className="animate-slide-left">
    <section id="projects" className="py-20 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-opacity-30" style={{ backgroundImage: 'url(/images/newbg.jpg)' }}></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl text-center mb-10 font-bold text-white animate-fadeIn">My Projects</h2>
        <div className="w-60 h-1 mx-auto bg-teal-300 mb-9"></div> 
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-gray-800 border-2 border-teal-600 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-zoomIn"
            >
              <Image
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
                width={400}
                height={300}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-teal-500">{project.name}</h3>
                <p className="text-gray-300 text-sm mt-2">{project.description}</p>
                <div className="flex mt-4 space-x-4">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="text-teal-500 hover:text-teal-400 inline-block transition-all duration-200 transform hover:scale-105"
                  >
                    <FaLink size={20} />
                  </Link>
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="text-teal-500 hover:text-teal-400 inline-block transition-all duration-200 transform hover:scale-105"
                    >
                      <FaGithub size={20} />
                    </Link>
                  )}
                  <Link
                    href={project.link}
                    target="_blank"
                    className="text-teal-500 hover:text-teal-400 inline-block transition-all duration-200 transform hover:scale-105"
                  >
                    <FaLaptopCode size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
       
        <div className="flex justify-center mt-10">
          <Link
            href="/project"  
            className="text-white font-semibold text-2xl animate-pulse transform hover:scale-110 transition-all duration-300 hover:bg-teal-700 py-3 px-6 rounded-full border-2 border-teal-500"
          >
            See More Projects
          </Link>
        </div>
      </div> <br />
   </section> 
   </div>

   
  );
};

export default Content;
