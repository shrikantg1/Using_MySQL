import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
const Home = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div
      name="home"
      className="w-full h-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto gap-20 md:flex-row p-3 ">
        <div className="flex flex-col justify-center h-full mr-2 mt-28 lg:mt-44">
          <motion.h2
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.6 }}
            className="lg:text-6xl text-4xl  text-white p-2 font-medium"
          >
            I'm ,
          </motion.h2>
          <motion.h2
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.8 }}
            className="lg:text-6xl text-4xl  text-white p-2 font-medium"
          >
            Shrikant Gaikwad
          </motion.h2>
          <motion.h2
            className="text-xl transition-all font-medium sm:text-5xl lg:w-[600px] text-cyan-600"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 1 }}
          >
            {"<"}
            <ReactTyped
              strings={["Full Stack Developer."]}
              typeSpeed={100}
              loop
              backSpeed={20}
              cursorChar="/>"
              showCursor={true}
            />
          </motion.h2>

          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 1.2 }}
            className="max-w-md py-4 text-gray-500 text-md"
          >
            Full-stack developer passionate about building web apps with React,
            Tailwind, ExpressJS, and MongoDB.
            <br /> Skilled at crafting intuitive UIs and robust backends.
            Thrives on finding creative solutions to real-world problems.
          </motion.p>

          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 1.4 }}
          >
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="flex items-center px-6 py-3 my-2 text-white rounded-md cursor-pointer group w-fit bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Portfolio
              <span className="duration-300 group-hover:rotate-90">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            <div className="mt-4">
              <div className="flex gap-8 mt-10 mb-6">
                <li className="list-none">
                  <a href="https://twitter.com/its_shri__11">
                    <FaTwitter className="text-4xl text-white hover:text-[#1DA1F2]" />
                  </a>
                </li>
                <li className="list-none">
                  <a href="https://www.linkedin.com/in/contactshrikantgaikwad/">
                    <FaLinkedin className="text-4xl text-white " />
                  </a>
                </li>
                <li className="list-none">
                  <a href="https://instagram.com/its_shri_20">
                    <LuInstagram className="text-4xl instagram text-white rounded-md" />
                  </a>
                </li>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ x: 100 }}
          animate={{ x: -10 }}
          transition={{ duration: 1 }}
        >
          <img
            src={HeroImage}
            alt="my profile"
            className="w-[70%]  h-[400px] mx-auto blob rounded-2xl md:w-full "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
