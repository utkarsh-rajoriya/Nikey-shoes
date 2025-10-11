import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import FollowCursor from "./stylings/FollowCursor";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import NikeLoader from "./components/NikeLoader";

const App = () => {
  const [showContent , setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() =>{
      setShowContent(true)
    },1900)
  }, [])
  

  return (
    <div>

     {!showContent && <div>
        <NikeLoader/>
      </div>}

      {showContent && <motion.div
        className="z-10"
        animate={{
          opacity: [0, 1],
        }}
        transition={{
          duration: 0.8,
          type: "spring",
          damping: 12,
          stiffness: 80,
        }}
      >
        <Navbar />
        <Hero />
        <FollowCursor color="#fff" />
      </motion.div>}

    </div>
  );
};

export default App;
