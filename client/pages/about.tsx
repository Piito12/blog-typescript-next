import React, { FC,Dispatch, SetStateAction } from "react";

interface IProps {
  setDisplay: Dispatch<SetStateAction<string>>;
}

const About: FC<IProps> = ({setDisplay}) => {
  return (
    <div className="abount-me">
      <div className="left-sections">
        <div className="about-me-header">WHO AM I</div>
        <div className="abount-me-descript">
          I am a software engineer with a passion for learning and building!
        </div>
        <button onClick={()=>setDisplay('contact')}>Contact me!</button>
      </div>
      <div className="rigth-sections">
        <div className="wrapper-img">
          <img src="https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
          <img src="https://images.unsplash.com/photo-1581092446327-9b52bd1570c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
          <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
