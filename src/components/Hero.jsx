import redJordan from "../assets/Red-Jordan.png";
import blueJordan from "../assets/Blue-Jordan.png";
import greenJordan from "../assets/Green-Jordan.png";
import yellowJordan from "../assets/Yellow-Jordan.png";
import greyJordan from "../assets/Grey-Jordan.png";
import { useState } from "react";
import { AnimatePresence, hover, motion } from "motion/react";

const Hero = () => {
  const [page, setPage] = useState(0);
  const [dirx, setDirx] = useState(0);

  const shoes = [
    {
      name: "Jordan Red",
      color: "Red",
      image: redJordan,
      background: "#C11912",
    },
    {
      name: "Jordan Blue",
      color: "Blue",
      image: blueJordan,
      background: "#004489",
    },
    {
      name: "Jordan Green",
      color: "Green",
      image: greenJordan,
      background: "#02541d",
    },
    {
      name: "Jordan Yellow",
      color: "Yellow",
      image: yellowJordan,
      background: "#90a327",
    },
    {
      name: "Jordan Grey",
      color: "Grey",
      image: greyJordan,
      background: "#1c1c1b",
    },
  ];

  let nextPage = () => {
    setDirx(1);
    console.log("next page is clicked!");
    setPage(page + 1);
  };

  let previousPage = () => {
    setDirx(0);
    console.log("previous page is clicked!");
    setPage(page - 1);
  };

  return (
    <div className="overflow-hidden w-full">
      {/* Background Layer */}
      <AnimatePresence mode="wait">
        <motion.div
          key={shoes[page].background}
          className="absolute w-full h-full lg:min-h-[100vh] max-md:min-h-[970px] max-lg:max-h-[550px] z-0"
          style={{ backgroundColor: shoes[page].background }}
          initial={{ scale: 0.4 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.4 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
        />
      </AnimatePresence>

      <div className="lg:min-h-[100vh]  max-md:min-h-[780px] grid grid-cols-1 md:grid-cols-3">
        {/* Grid-1 */}
        <div className="z-10 pt-[7rem] md:pt-[5rem] flex flex-col justify-center max-md:items-center md:pl-[3rem] lg:pl-[6rem] gap-4">
          <h1 className="bebas-neue-regular text-4xl text-white tracking-wide">
            {shoes[page].name}
          </h1>

          <div>
            <p className="bebas-neue-regular text-lg text-white tracking-wide max-md:text-center">
              release date
              <br />
              13/7/25
              <br />
              color way
              <br />
              {shoes[page].color}
            </p>
          </div>

          <div>
            <p className="bebas-neue-regular text-lg text-white tracking-wide">
              size in (in)
            </p>
          </div>

          <div className="w-50 md:w-30 lg:w-50 grid grid-cols-5 md:grid-cols-3 lg:grid-cols-5 gap-2 ">
            <div className="flex flex-col justify-center gap-2">
              <div className="cubes hover:bg-white hover:text-black">sm</div>
              <div className="cubes hover:bg-white hover:text-black">9</div>
            </div>

            <div className="flex flex-col justify-center gap-2">
              <div className="cubes hover:bg-white hover:text-black">md</div>
              <div className="cubes hover:bg-white hover:text-black">10</div>
            </div>

            <div className="flex flex-col justify-center gap-2">
              <div className="cubes hover:bg-white hover:text-black">lg</div>
              <div className="cubes hover:bg-white hover:text-black">11</div>
            </div>

            <div className="flex flex-col justify-center gap-2">
              <div className="cubes hover:bg-white hover:text-black">xl</div>
              <div className="cubes hover:bg-white hover:text-black">12</div>
            </div>

            <div className="flex flex-col justify-center gap-2">
              <div className="cubes hover:bg-white hover:text-black">8</div>
              <div className="cubes hover:bg-white hover:text-black">13</div>
            </div>
          </div>
        </div>

        {/* Grid-2 */}
        <div className="z-20 mt-[4rem] relative flex flex-col justify-center items-center">
          <div className="overflow-hidden">
            <h1 className="Nike text-[14.5rem] lg:text-[22rem] text-center">
              NIKE
            </h1>
          </div>

          <AnimatePresence>
            <motion.img
              key={shoes[page].image}
              src={shoes[page].image}
              className="shoe-img brightness-110 max-md:min-w-[200px] md:min-w-[400px] lg:min-w-[500px] xl:max-w-[700px] z-30 absolute lg:top-12"
              initial={{ x: dirx > 0 ? 700 : -700, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: dirx > 0 ? -700 : 700, opacity: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                damping: 12,
                stiffness: 120,
              }}
            />
          </AnimatePresence>
        </div>

        {/* Grid-3 */}
        <div className="z-20 flex flex-col justify-center items-center md:pt-[20rem] md:pl-[3rem]">
          <p className="w-55 md:w-40 lg:w-80  text-white text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eionem
            sit amet consectetur.
          </p>

          <div className="py-5 pt-3 flex flex-row gap-4 max-lg:justify-center">
            <button
              className="hover:text-[#000] hover:bg-white text-sm w-10 h-10 rounded-full border-1 text-white tracking-wide  transition ease-in border-white flex justify-center items-center"
              onClick={previousPage}
              disabled={page === 0}
            >
              <i className="fa-solid fa-arrow-left-long"></i>
            </button>
            <button
              className="hover:text-[#000] hover:bg-white text-sm w-10 h-10 rounded-full border-1 text-white tracking-wide  transition ease-in border-white flex justify-center items-center"
              onClick={nextPage}
              disabled={page === shoes.length - 1}
            >
              <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
