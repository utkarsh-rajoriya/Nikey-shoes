import "./App.css";
import Hero from "./components/Hero";
import FollowCursor from "./stylings/FollowCursor";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>

      <Navbar/>
      <Hero/>
      
      <FollowCursor/>
    </div>
  );
};

export default App;
