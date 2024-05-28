// pages/projects.tsx
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import VimeoVideo from '@/components/VimeoVideo';
import Link from 'next/link'; // Husk at opdatere stien hvis nødvendig

interface Project {
  name: string;
  description: string;
  image: string;
  link: string;
  videoId: string;
}

const projects: Project[] = [
  {
    name: 'Movie app',
    description: 'A comprehensive platform for movie enthusiasts to explore, review, and rate films.',
    image: '/movie.jpg',
    link: '/movie-app',
    videoId: '946309409'
  },
  {
    name: 'Pet finder',
    description: 'Connects potential pet owners with rescue animals using advanced matching algorithms.',
    image: '/pet1.jpg',
    link: '/pet-finder',
    videoId: '2'
  },
  {
    name: 'Din mægler',
    description: 'Find your dream home and the best real estate agents all in one place. Make your home search easy with Din Mægler.',
    image: '/dinmeagler.jpg',
    link: '/fashion-site',
    videoId: '946151411'
  },
  {
    name: 'Fitness Tracker',
    description: 'An app dedicated to fitness enthusiasts for tracking and improving workout routines.',
    image: '/welcome2.jpg',
    link: '/fitness-tracker',
    videoId: '946684531'
  },
  {
    name: 'Landrup dans',
    description: 'An app dedicated to fitness enthusiasts for tracking and improving workout routines.',
    image: '/billede1.jpg',
    link: '/fitness-tracker',
    videoId: '944070750'  // Opdateret Vimeo video ID
  },
  {
    name: 'Karmen',
    description: 'An app dedicated to fitness enthusiasts for tracking and improving workout routines.',
    image: '/karmen.jpg',
    link: '/fitness-tracker',
    videoId: '946336944'
  }
];

const Projects: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState('');

  const handleProjectClick = (videoId: string) => {
    setCurrentVideoId(videoId);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="text-center  p-4 mt-20 mb-20 mx-auto md:mx-10  lg:mx-20">
    <h1 className="text-4xl font-bold text-gray-800 mb-10">My Recent Work</h1>
    <p className="text-lg text-gray-600 mb-10">Here are a few past design projects I've worked on. Want to see more? <Link href="mailto:osradk@gmail.com"><span className="text-blue-600 hover:text-blue-700 underline">Email me</span></Link>.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
  <div key={index} className="relative  rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 hover:bg-blue-900">        
      <div className="relative h-64 w-full">
              <Image
                src={project.image}
                alt={project.name}
                layout="fill"
                objectFit="cover"
                className="opacity-70 hover:opacity-700"
              />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-6 hover:bg-transparent">
            <h3 className="font-semibold text-xl mb-2 text-white">{project.name}</h3>
         <p className="text-white text-base mb-4">
           {project.description}
         </p>
              <button 
                onClick={() => handleProjectClick(project.videoId)}
                className="inline-block bg-transparent border border-[#d6ae57] text-white py-2 px-6 rounded-full hover:bg-[#d6ae57] hover:text-gray-200 transition duration-500 ease-in-out text-shadow">
              
                View Video
              </button>
              
            </div>
            </div>
          </div>
        ))}
      </div>

      {modalVisible && (
  <div className="fixed inset-0 flex justify-center items-center z-50">
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-lg max-w-lg w-full">
      <VimeoVideo videoId={currentVideoId} />
      <button
        onClick={handleCloseModal}
        className="inline-block bg-transparent border border-[#d6ae57] text-white py-1 px-3 rounded-full hover:bg-[#d6ae57] hover:text-gray-200 transition duration-500 ease-in-out text-shadow mt-4">
       
        Close
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default Projects;
