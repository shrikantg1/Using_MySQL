import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "Skills",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className=" fixed flex items-center justify-between w-full h-20 px-4 text-white bg-black z-40">
      <div>
        <Link to="home" smooth duration={500}>
          <h1 className="ml-2 text-5xl duration-200 cursor-pointer font-signature hover:scale-105 hover:text-orange-500">
            Shri
          </h1>
        </Link>
      </div>
      <ul className="hidden gap-6 text-2xl md:flex transition-all">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 font-medium text-white capitalize duration-200 cursor-pointer hover:scale-105 hover:text-orange-500"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <li className="list-none">
        <a href="https://drive.google.com/file/d/1TXvNTmL_6I7wi9cE1fJQVVeSC7nQ19sx/view?usp=sharing">
          <button className="px-3 py-2 text-md bg-blue-600 rounded-lg">
            Hire Me
          </button>
        </a>
      </li>{" "}
      <div
        onClick={() => setNav(!nav)}
        className="z-10 pr-4 text-gray-500 cursor-pointer  md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-white bg-gradient-to-b from-black  to-gray-800 transition-all">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 py-6 text-2xl capitalize cursor-pointer hover:scale-105"
            >
              <Link
                className=""
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
