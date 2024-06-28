import { motion, useScroll, useTransform } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const About = () => {
  const { scrollY } = useScroll();

  const textAnimation = useTransform(
    scrollY,
    [0, window.innerHeight / 2],
    [0, 1]
  );

  return (
    <div
      name="about"
      className="w-full h-auto text-white bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto ">
        <div className="pb-18 mb-4  mt-20 lg:mt-20 ">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500 ">
            About
          </p>
        </div>
        <div className="md:flex md:flex-row flex-col  justify-between items-center ">
          <motion.div
            className=""
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 1 }}
            style={{ opacity: textAnimation }}
          >
            <img
              className="rounded-2xl"
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWk3M2Fzc3R3bG1tNWo4dG96azJzcmc0aTh4Z2R4ZGZkNnprdDN4ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L1R1tvI9svkIWwpVYr/giphy.gif"
              alt=""
            />
          </motion.div>
          <div className="md:w-[50%] w-full my-4 md:my-1 md:mx-4">
            <motion.p
              className=" text-md"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.8 }}
              style={{ opacity: textAnimation }}
            >
              My Name is{" "}
              <span className="text-orange-500">Shrikant Gaikwad</span>. As a
              full-stack developer, I specialize in crafting diverse projects,
              including a LeetCode clone, an ecommerce platform, and a dynamic
              blog website.
            </motion.p>
            <br />
            <motion.p
              className="text-md"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 1 }}
              style={{ opacity: textAnimation }}
            >
              Leveraging my expertise in both backend and frontend development,
              I meticulously build robust solutions that seamlessly integrate
              complex functionalities like algorithmic problem-solving, user
              authentication, and engaging UI/UX design.
            </motion.p>
            <br />

            <motion.p
              className="text-md"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 1.2 }}
              style={{ opacity: textAnimation }}
            >
              {" "}
              Looking to leverage solid engineering foundation and full-stack
              skills to join a dynamic technology team as a web developer.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
