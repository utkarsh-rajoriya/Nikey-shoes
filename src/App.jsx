import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import FollowCursor from "./stylings/FollowCursor";
import { AnimatePresence, motion } from "motion/react";
import GlitchText from "./stylings/GlitchText";
import { useEffect, useState } from "react";

const App = () => {
  const [showContent , setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() =>{
      setShowContent(true)
    },3000)
  }, [])
  

  return (
    <div>

      <motion.div
        className="z-100 loading-screen flex justify-center items-center"
        animate={{
          y: [0, -300, -700],
          opacity: [1, 0.5, 0],
        }}
        transition={{
          delay: 3,
          duration: 1,
        }}
      >
        <GlitchText
          speed={1}
          enableShadows={true}
          enableOnHover={false}
          className="custom-class"
        >
          Nike
        </GlitchText>
      </motion.div>

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
