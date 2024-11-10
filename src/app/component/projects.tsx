import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Project = () => {
  return (
    <div id="project" >
      <section className="text-black body-font bg-fixed bg-cover bg-center custom-image">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        <u>My Projects</u>
      </h1>
      
    </div>
    <div className="flex flex-wrap -m-9 -mt-[5rem]">

      {/* projects */}

      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={("file.svg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Toggle Button
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              UpDown
            </h1>
            <p className="leading-relaxed">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <Link target="_blank" href={"https://student-information-form.vercel.app/"}>
            <p className='leading-relaxed text-blue-600 hover:underline'> View Project..</p>
            </Link>

          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          {/* <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assests/projects/student information form.png")}
          /> */}
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              
              Student Information Form
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Form
            </h1>
            <p className="leading-relaxed">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <Link target="_blank" href={"https://student-information-form.vercel.app/"}>
            <p className='leading-relaxed text-blue-600 hover:underline'> View Project..</p>
            </Link>
            
          </div>
        </div>
      </div>


      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          {/* <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assests/projects/iqfashioncollections.jpeg")}
          /> */}
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              IQ Fashion collection
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Dress collections
            </h1>
            <p className="leading-relaxed">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            
            <Link target="_blank" href={"https://iq-brand-logo.vercel.app/"}>
            <p className='leading-relaxed text-blue-600 hover:underline'> View Project..</p>
            </Link>
          </div>
        </div>
      </div>


      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          {/* <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assests/projects/resumes.jpeg")}
          /> */}
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Static Resume
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Resume
            </h1>
            <p className="leading-relaxed">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <Link target="_blank" href={"https://first-static-resume.vercel.app/"}>
            <p className='leading-relaxed text-blue-600 hover:underline'> View Project..</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          {/* <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assests/projects/shedule.jpeg")}
          /> */}
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              The Time Table
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Shehdule
            </h1>
            <p className="leading-relaxed">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <Link target="_blank" href={"https://shedule.vercel.app/"}>
            <p className='leading-relaxed text-blue-600 hover:underline'> View Project..</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          {/* <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assests/projects/todoApp.png")}
          /> */}
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Todo App
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              ToDoApp
            </h1>
            <p className="leading-relaxed">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <Link target="_blank" href={"https://to-do-list-app-three-dusky.vercel.app/"}>
            <p className='leading-relaxed text-blue-600 hover:underline'> View Project..</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Project
