import Link from 'next/link';
import { FaHandshake } from 'react-icons/fa';


const ThankYou: React.FC = () => {
  return (
    <div className="animate-slide-left">
      <div
        className="bg-black text-white py-16 text-center animate-fadeIn bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/Animation Gif.gif')" }}
      >
        <div className="container mx-auto px-6 bg-black bg-opacity-60 rounded-lg py-10">
          {/* Thank You Heading */}
          <h2 className="text-4xl font-bold mb-4">THANK YOU FOR COMING MY WEBSITE</h2>
          <div className="w-36 h-1 mx-auto bg-red-700 mb-6"></div> {/* Teal Line */}

          {/* Thank You Message */}
          
          <p className="text-lg mb-8">
          Thank you for spending time on my website. I’m blessed to have your support, and I hope my work has brought some value to your day
          </p>

          {/* Contact Button */}
          <Link href="https://www.linkedin.com/in/aatfa-siddiqui-b88630331"
             className="px-8 py-3 rounded-lg border-2 border-pink-700 text-white animate-pulse font-semibold text-lg transition-all duration-300 hover:bg-teal-700 inline-flex items-center">
              <FaHandshake className="mr-2 text-2xl" />
              Lets Connect
          
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
