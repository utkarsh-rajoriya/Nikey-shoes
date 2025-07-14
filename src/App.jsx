import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import FollowCursor from "./stylings/FollowCursor";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FollowCursor color="#fff" />
    </div>
  );
};

export default App;
