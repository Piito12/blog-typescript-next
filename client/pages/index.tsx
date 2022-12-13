import React, {
  useState,
  FC,
  Dispatch,
  ChangeEvent,
  SetStateAction,
} from "react";
import { Navbar } from "./navbar";
import Blog from "./blog";
import Contact from "./contact";
import About from "./about";
import Podcast from "./podcast";

interface IProps {
  setDisplay: Dispatch<SetStateAction<string>>;
}

const Home: FC<IProps> = () => {
  const [display, setDisplay] = useState<string>("blog");
  
  return (
    <>
      <Navbar setDisplay={setDisplay} />
      <div className="body-container">
        {display === "blog" ? (
          <Blog />
        ) : display === "about" ? (
          <>
            <About />
          </>
        ) : display === "podcast" ? (
          <Podcast />
        ) : display === "contact" ? (
          <Contact setDisplay={setDisplay} />
        ) : null}
      </div>
    </>
  );
};

export default Home;
