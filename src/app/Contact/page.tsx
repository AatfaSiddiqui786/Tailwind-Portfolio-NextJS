
'use client'
import { useState, ChangeEvent, FormEvent } from "react";
import {  FaEnvelope,  } from "react-icons/fa"; 

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
  
    <div className="animate-slide-up"   style={{ backgroundImage: "url('/Animation Gif.gif')" }}>
    <div className="text-white p-8 flex flex-col lg:flex-row justify-between items-center gap-10 relative">
     
      <div className="absolute inset-0 bg-cover bg-center bg-opacity-30" style={{ backgroundImage: "url('/public/images/Animation Gif.gif')" }}></div>

    
      <div className="relative z-10 space-y-8 w-full  lg:w-1/3">
        <h2 className="text-3xl font-bold text-neon mb-4">You Can Contact Here</h2>

       
        
        <div className="bg-pink-800 bg-opacity-70 p-6 border-2 border-pink-700 rounded-lg shadow-lg flex items-center gap-3 w-full mb-4">
          <FaEnvelope className="text-neon text-xl" />
          <span className="text-lg">aatfasiddiqui@gmail.com</span>
        </div>

        
        </div>
      </div>

     
      <div className="bg-white-800 bg-opacity-100p-40 rounded-lg shadow-lg w-full lg:w-30 space-y-6 relative z-10">
        <h2 className="text-3xl font-bold text-neon mb-4">Contact Me</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
            <label htmlFor="name" className="block text-lg">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-white-900 text-white-900 focus:outline-none focus:ring-2 focus:ring-neon"
              required
            />
          </div>

          
          <div>
            <label htmlFor="email" className="block text-lg">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-white-900 text- focus:outline-none focus:ring-2 focus:ring-neon"
              required
            />
          </div>

          
          <div>
            <label htmlFor="message" className="block text-lg">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-1 rounded-md bg-white-900 text-white-900  border-pink-90focus:outline-none focus:ring-10 focus:ring-neon"
              rows={3}
              required
            ></textarea>
          </div>

         
          <button
            type="submit"
            className=" w-full p-4 bg-neon text-white-300 border-2 border-pink-900  text-center justify-center font-bold rounded-md   hover:bg-white-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
   
  );
};

export default Contact;
