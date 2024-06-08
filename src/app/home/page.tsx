"use client"
import type { NextPage } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { useEffect } from 'react';
import Projects from '@/components/Projects';
import Contact from '@/app/contact/page';




const Home: NextPage = () => {
  const skills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React.js', level: 80 },
    { name: 'Next.js', level: 80 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'TypeScript', level: 50 }, // Øg niveauet hvis muligt
    { name: 'Responsive Design', level: 90 },
    { name: 'Git & GitHub', level: 85 },
    { name: 'Node.js', level: 50 }, // Øg niveauet hvis muligt
    { name: 'GraphQL', level: 40 } // Tilføjet ny færdighed
  ];

  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    const keyframes = `
      @keyframes fillUp {
        0% {
          width: 0;
        }
        100% {
          width: 100%;
        }
      }
    `;
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  }, []);

  return (
    <div>
<div className="relative p-8 flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-700 to-gray-0 min-h-screen overflow-hidden">    {/* Dit indhold her */}      <Navbar />
      <div className="container mx-auto px-4 pt-[100px] flex flex-col md:flex-row justify-center items-center">
        <div className=" md:w-1/3 text-center md:text-left animate-fadeInLeft">
          <div className="inline-block overflow-hidden relative w-64 h-64 rounded-full mx-auto md:mx-0">
          <Image 
  src="/billede.jpg" 
  alt="Profile Picture of Osra Almousavi"
  layout="fill" 
  objectFit="cover" 
  className="rounded-full img-shadow"
/>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl  mt-6 text-white">Who am I?</h1>
          <p className="text-sm md:text-lg lg:text-xl mt-2 text-white">A web developer dedicated to building user-friendly and efficient digital solutions</p>
        </div>
        <div className="md:w-1/3 mt-6 md:mt-0 animate-fadeInRight">
          <div className=" flex flex-wrap justify-center gap-2 animate-popIn">
          {skills.map((skill, index) => (
  <div key={index} className="w-2/3 md:w-1/2 lg:w-1/3 px-4 mb-1">
    <span className="text-white text-sm">{skill.name}</span>
    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden mt-1">
      <div style={{ width: `${skill.level}%` }} className="h-full bg-[#b99d61] animate-fillUp"></div>
    </div>
  </div>
))}
          </div>
        </div>
      </div>
    </div>
    <Projects />
<div>
<Contact/>
</div>
    </div>
  );
};

export default Home;