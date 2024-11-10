

import Link from 'next/link';
import { FC } from 'react';
import Image from 'next/image';


const About: FC = () => {
  return (
    <div className="animate-slide-up">
    <div
      className="bg-black text-white p-10 min-h-screen bg-cover bg-center flex flex-col items-center justify-start lg:justify-center"
      style={{ backgroundImage: 'url("/Animation Gif.gif")' }} // Replace with your image path
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-24 p-8 rounded-xl shadow-2xl bg-opacity-90 backdrop-blur-lg">
        
        {/* Left Side - Profile Picture */}
        <div className="flex-shrink-0 w-full lg:w-1/3 flex justify-center lg:justify-start lg:pl-8 xl:pl-12 mb-8 lg:mb-0">
          <Image
            src="/pink.png" // Replace with your image path
            alt="Your Name"
            width={100}
            height={100}
            className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full shadow-lg border-4 border-teal-500 object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>

        {/* Right Side - About and Skills */}
        <div className="w-full lg:w-2/3 space-y-10 text-center lg:text-left">
          
          
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-pink-700 mb-4">About Me</h2>

<div className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 space-y-4">
  
  <p>
    I am a UI/UX designer and frontened developer 
  </p>


<div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-2xl mx-auto lg:mx-0 space-y-4">
  <p className="font-semibold text-xl text-pink-700">Core Skills</p>
  <ul className="space-y-3">
    <li className="flex items-center space-x-3 bg-gray-700 p-3 rounded-md hover:bg-teal-pink-700 transition duration-200">
      <span className="text-pink-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <span className="text-white">Combining aesthetic design with functional development</span>
    </li>
    <li className="flex items-center space-x-3 bg-gray-700 p-3 rounded-md hover:bg-pink-700 transition duration-200">
      <span className="text-pink-700">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <span className="text-white">Proficiency in modern web technologies</span>
    </li>
    <li className="flex items-center space-x-3 bg-gray-700 p-3 rounded-md hover:bg-pink-600 transition duration-200">
      <span className="text-pink-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <span className="text-white">Analytical approach to problem solving</span>
    </li>
  </ul>
</div>

</div>
</div>
</div>
</div>   <br />
 

<button
  className="relative px-8 py-3 border-2 border-teal-00 text-white font-semibold text-lg rounded-full shadow-lg transition duration-300 ease-in-out transform hover:bg-pink-700 hover:scale-105 flex items-center animate-pulse space-x-2"
>
<Link href="/pink.png" target="_blank" rel="noopener noreferrer">
      <span className="text-white hover:bg--700 fblueont-semibold text-lg transition-all duration-200 transform hover:scale-105">
        Hire Me
      </span>
    </Link>

  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
  </svg>
  <span
    className="absolute  rounded-full opacity-75 bg-pink-700 blur-lg "
    aria-hidden="true"
  ></span>
</button>


<div className="w-full max-w-5xl mx-auto mt-16 lg:mt-24 p-10 rounded-2xl shadow-2xl bg-gradient-to-r from-gray-900 to-gray-800 bg-opacity-90 backdrop-blur-lg px-4 sm:px-6">
  <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-center tracking-wide">
    Ca<span className="text-pink-700">reer</span> Jour<span className="text-pink-700700">ney</span>
  </h2>

  <hr className="border-t-2 border-pink-700 w-20 mx-auto mb-6" />

  <p className="text-gray-300 text-lg leading-relaxed text-center lg:text-left transition-transform duration-300 ease-in-out hover:scale-105">
  I come from a non-IT background, and before starting my course in IT and Artificial Intelligence, I had no previous experience in the field. I joined IT about one year a ago, and with constant effort and dedication, I have gained significant proficiency. This journey has not only improved my skills but has also strengthened my confidence. I am now well-equipped to handle various IT-related challenges, and I look forward to applying my knowledge in meaningful ways.
  </p>

  <div className="flex justify-center mt-8">
    <button className="px-6 py-3 text-lg font-semibold bg-black border-2 border--500 animate-pulse text-white rounded-full shadow-md hover:bg-pink-700 transition duration-300 ease-in-out transform hover:scale-110">

     <Link href="/cv.png">Explore My Work </Link> 

      <span className="ml-2 text-white">
        <svg xmlns="http://aatfasiddiqui@gmail.com" className="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg>
      </span>
    </button>
  </div>
</div>
<div className="animate-slide-left">
      <div className="relative bg-gradient-to-r from-to-pink-700 to-blue-900 rounded-lg body-font  text-2xl bg-gray-600 text-white py-4">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url(/public/images/Animation Gif.gif)' }}></div>
        <div className="relative z-10 container mx-auto px-6 sm:px-8 md:px-12 lg:px-24 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4"><b><i><u>MY EDUCATION</u></i></b></h3>
          <p className="text-base sm:text-lg mb-6">
          
     <h1><b><u><strong>
      <p>
          * Assosiated degree of commerce ADC (continue) from Karachi university
      </p>
      <p>
          * ICOM 2022 to 2023 from sir syed govt collage 
      </p>
      <p>
          * Marticulation of science from 2020  to 2021 with A+1(89%)
      </p>
      
      
  </strong></u></b></h1>
  
  
  
          </p>
         
        </div>
      </div>
      </div>
  </div>
  </div>
  
  );
};

export default About;
