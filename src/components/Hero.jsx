import redJordan from "../assets/Red-Jordan.png";
import blueJordan from "../assets/Blue-Jordan.png";
import { useState } from "react";
import { motion } from "motion/react"

const Hero = () => {

  const[page , setPage] = useState(0);

  const shoes = [
  {
    name : "Jordan Red",
    image : redJordan,
    background : "#C11912"
  },
  {
    name : "Jordan Blue",
    image : blueJordan,
    background : "#0000ff"
  }
]

let nextPage = () =>{
  console.log("next page is clicked!")
  setPage(page+1);
}

let previousPage = () =>{
  console.log("previous page is clicked!")
  setPage(page-1);
}

  return (
    <motion.div className="Hero w-full bg-[#C11912]">
      <div className=" min-h-[780px] grid grid-cols-1 md:grid-cols-3">
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
              red
            </p>
          </div>

          <div>
            <p className="bebas-neue-regular text-lg text-white tracking-wide">
              size in (in)
            </p>
          </div>

          <div className="w-50 md:w-30 lg:w-50 grid grid-cols-5 md:grid-cols-3 lg:grid-cols-5 gap-2 ">
            
            <div className="flex flex-col justify-center gap-2">
              <div className="cubes">sm</div>
              <div className="cubes">9</div>
            </div>

            <div className="flex flex-col justify-center gap-2">
              <div className="cubes">md</div>
              <div className="cubes">10</div>
            </div>

            <div className="flex flex-col justify-center gap-2">
              <div className="cubes">lg</div>
              <div className="cubes">11</div>
            </div>

            <div className="flex flex-col justify-center gap-2">
              <div className="cubes">xl</div>
              <div className="cubes">12</div>
            </div>

            <div className="flex flex-col justify-center gap-2">
              <div className="cubes">8</div>
              <div className="cubes">13</div>
            </div>
          </div>

          
        </div>

        {/* Grid-2 */}
        <div className="z-20 mt-[4rem] relative flex flex-col justify-center items-center">
          <div className="overflow-hidden">
          <h1 className="Nike text-[14.1rem] lg:text-[22rem] text-center">
            NIKE
          </h1>
          </div>
          
          <img src={shoes[page].image} className="shoe-img brightness-110 max-md:min-w-[200px] md:min-w-[500px] xl:max-w-[700px] z-30 absolute lg:top-12" ></img>
        </div>
        

        {/* Grid-3 */}
        <div className="flex flex-col justify-center items-center md:pt-[20rem] md:pl-[3rem]">
          <p className="w-55 md:w-40 lg:w-80  text-white text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
            eionem sit amet consectetur.
          </p>

          <div className="py-5 pt-3 flex flex-row gap-4 max-lg:justify-center">
              <button className="hover:text-[#C11912] hover:bg-white text-sm w-10 h-10 rounded-full border-1 text-white tracking-wide  transition ease-in border-white flex justify-center items-center" onClick={previousPage} disabled={page === 0}>
                  <i className="fa-solid fa-arrow-left-long"></i>
              </button>
              <button className="hover:text-[#C11912] hover:bg-white text-sm w-10 h-10 rounded-full border-1 text-white tracking-wide  transition ease-in border-white flex justify-center items-center" onClick={nextPage} disabled={page === shoes.length-1}>
                  <i className="fa-solid fa-arrow-right-long"></i>
              </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
