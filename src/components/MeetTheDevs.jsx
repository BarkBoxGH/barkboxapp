import React from "react";
import meetDevBene from "../assets/meetDevBene.jpg"
import meetDevWill from "../assets/meetDevWill.jpg"
const developers = [
  
  {
    name: "William Offei Nyanteh",
    role: "Backend Developer",
    image: meetDevWill,
    socialLinks: {
      github: "https://github.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
    },
  },
  {
    name: "Benedicta Davour",
    role: "Frontend Developer",
    image: meetDevBene,
    socialLinks: {
      website: "https://benedictadavour.netlify.app",
      linkedin: "www.linkedin.com/in/eba-davour",
    },
  }
];

const MeetTheDevs = () => {
  return (
   <section className="h-[100vh]">
     <div className="h-[100%] bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="h-[10%] text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900">Meet the Developers</h2>
        <p className="mt-4 text-lg text-gray-500">Our talented team behind the scenes</p>
      </div>
      <div className="h-[80%] w-[60%] ml-auto mr-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
  {developers.map((developer) => (
    <div
      key={developer.name}
      className="h-[60%] bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image Container */}
      <div className="h-[70%] overflow-hidden flex justify-center items-center">
        <img
          className="h-full object-cover rounded-sm"
          src={developer.image}
          alt={developer.name}
        />
      </div>
      {/* Developer Info */}
      <h3 className="mt-4 text-xl font-semibold text-gray-800">{developer.name}</h3>
      <p className="text-gray-500">{developer.role}</p>
      {/* Social Links */}
      <div className="mt-4 flex justify-center space-x-4">
        <a
          href={developer.socialLinks.website}
          className="text-[#1E3A8A] hover:text-gray-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.801 8.207 11.4.6.111.82-.261.82-.58v-2.15c-3.338.727-4.042-1.612-4.042-1.612-.543-1.379-1.327-1.748-1.327-1.748-1.084-.736.082-.721.082-.721 1.199.085 1.825 1.234 1.825 1.234 1.07 1.825 2.804 1.299 3.492.994.108-.775.418-1.299.759-1.599-2.665-.302-5.467-1.333-5.467-5.91 0-1.306.467-2.383 1.238-3.224-.124-.303-.535-.97.118-2.006 0 0 1.008-.324 3.34 1.238 1.003-.285 2.083-.426 3.157-.426 1.073 0 2.153.141 3.157.426 2.33-1.562 3.34-1.238 3.34-1.238.654 1.036.242 1.703.118 2.006.771.84 1.238 1.918 1.238 3.224 0 4.585-2.814 5.607-5.504 5.903.428.368.813 1.092.813 2.204v3.267c0 .319.222.692.82.58C20.562 21.801 24 17.302 24 12c0-6.627-5.373-12-12-12z"
            />
          </svg>
        </a>
        <a
          href={developer.socialLinks.linkedin}
          className="text-[#1E3A8A] hover:text-gray-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M20 0H4C2.895 0 2 .895 2 2v20c0 1.105.895 2 2 2h16c1.105 0 2-.895 2-2V2c0-1.105-.895-2-2-2zM9 19H5V9h4v10zm-2-11H6V7h1v1zm13 11h-4v-5.6c0-1.337-.466-2.243-1.612-2.243-1.153 0-1.664.92-1.664 2.108V19h-4V9h4v2h-.034c1.085-1.611 4.034-2.324 5.642-1.271.703.539.992 1.37.992 2.225v6.308z"
            />
          </svg>
        </a>
      </div>
    </div>
  ))}
</div>

    </div> 
   </section>
  );
};

export default MeetTheDevs;
