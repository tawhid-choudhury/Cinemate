import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import goals from '../../../assets/images/goals.jpg';
import team_1 from '../../../assets/images/team-1.png';
import team_2 from '../../../assets/images/team-2.jpg';
import team_3 from '../../../assets/images/team-3.jpg';
import team_4 from '../../../assets/images/team-4.jpg'; 

const teamMembers = [
  {
    name: "Tawhid Al Muhaimin Choudhury",
    role: "Frontend Developer || MERN",
    description: "I'm on a mission to craft robust and dynamic web solutions.",
    imageUrl: team_1,
    linkedin: "https://www.linkedin.com/in/tawhid-choudhury-0360072a4/",
    github: " https://github.com/tawhid-choudhury/",
    email: "tawhidalmuhaimin@gmail.com",
  },
  {
    name: "Dipto Sarkar",
    role: "Backend Developer || Ruby on Rails",
    description: "I'm committed to use my skills to contribute to impactful projects and advance my career.",
    imageUrl: team_2,
    linkedin: "linkedin.com/in/dipto-sarkar-bb8918295",
    github: "https://github.com/DiptoSarkar182",
    email: "diptosarkarhridoy@gmail.com",
  },
  {
    name: "Fahim Haque",
    role: "UI/UX Developer || Figma",
    description: "I'm committed to use my skills to contribute to impactful projects and advance my career.",
    imageUrl: team_3,
    linkedin: "linkedin.com/in/fahim-haque-36bb511b0",
    github: "https://github.com/DiptoSarkar182",
    email: "fahimsarfi2@gmail.com",
  },
  {
    name: "Md Shajidur Rahim",
    role: "Project Manager || Notion | Frontend Developer || MERN",
    description: "I'm on a mission to craft robust and dynamic web solutions.",
    imageUrl: team_4,
    linkedin: "linkedin.com/in/shajidur-rahim-47dc",
    github: "https://github.com/md-shajidur-rahim",
    email: "md.shajidur.rahim@gmail.com",
  }
];

const AboutUs = () => {
    return (
      <div className="bg-gray-100 py-10">

        {/* Our Goals Section */}
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-5">
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-5">Our Goal</h1>
            <ul className="list-disc ml-5 space-y-2 text-gray-700">
              <li>At CineMates, our goal is to create a dynamic and engaging community where movie lovers can connect, share, and discover films together.</li>
              <li>Whether you are looking for recommendations from your closest friends or want to explore the tastes of fellow cinephiles, CineMates provides a platform where every movie and TV show comes with a personal touch. </li>
              <li>We believe that the best movie experiences are those shared, and our mission is to make every recommendation count.</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src={goals} alt="" className="w-full h-full object-cover"/>
          </div>
        </div>
  
        {/* Meet The Team Section */}
        <div className="mt-10">
          <h1 className="text-3xl font-bold text-center mb-10">Meet The Team</h1>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-5">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={member.imageUrl} alt={member.name} className="w-full h-48 object-cover"/>
                <div className="p-6">
                  <h2 className="text-xl font-bold">{member.name}</h2>
                  <p className="text-gray-600">{member.role}</p>
                  <p className="text-gray-700 mt-2">{member.description}</p>
                  <div className="flex mt-4 space-x-3">
                    <a href={member.linkedin} className="text-blue-700 hover:text-blue-900">
                      <FaLinkedin size={24} />
                    </a>
                    <a href={member.github} className="text-black hover:text-gray-700">
                      <FaGithub size={24} />
                    </a>
                    <a href={`mailto:${member.email}`} className="text-red-500 hover:text-red-700">
                      <FaEnvelope size={24} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutUs;