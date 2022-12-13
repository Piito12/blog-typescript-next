import * as React from "react";

export interface IAppProps {
  setDisplay: (display: string) => void;
}

export const Navbar: React.FC<IAppProps> = ({ setDisplay }) => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="nav-logo" onClick={()=> setDisplay('blog')}>NOMAD ON THE ROAD</div>
        <div className="nav-selection">
          <div className="nav-selection-item">
            <button onClick={() => setDisplay("blog")}>
              BLOG
            </button>
            <button onClick={() => setDisplay("podcast")}>
             PODCAST
            </button>

            <button onClick={() => setDisplay("about")}>
              ABOUT
            </button>
            <button onClick={() => setDisplay("contact")}>
              CONTACT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
