import CryptoHub from "../assets/portfolio/CryptoHub.png";
import { FaRocket } from "react-icons/fa";
import blog from "../assets/portfolio/Blog.png";
import ecom from "../assets/portfolio/ecom.png";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: blog,
      demo: "https://stack-spot.vercel.app/",
      
      name: "blog website",
    },
    {
      id: 2,
      src: ecom,
      demo: "https://rustysym.github.io/reactjs-e-commerce-frontend/#",

      name: "Ecommerce website",
    },
    {
      id: 3,
      src: CryptoHub,
      demo: "https://crypto-hub-psi.vercel.app/",
      name: "Cryptohub website",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-20  md:mt-24 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {portfolios.map(({ id, src, demo, name }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-500 rounded-lg hover:scale-110 transition-all"
            >
              <img src={src} alt="" className="rounded-md duration-200 " />
              <div className="flex items-center justify-center">
                <button
                  href={id.demo}
                  className="w-full px-6 py-3  items-center flex justify-center duration-200 hover:scale-105"
                >
                  <a href={demo} className="">
                    <div className="flex  gap-2 justify-center text-center items-center">
                      <FaRocket />
                      <h2 className="text-center ">Demo</h2>
                      <div className="">
                        <span className="text-orange-500">*{name}</span>
                      </div>
                    </div>{" "}
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
