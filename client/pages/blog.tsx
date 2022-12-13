import * as React from "react";
import { data } from "./data";

export interface IAppProps {}

const Blog: React.FC<IAppProps> = () => {
  return (
    <div className="blog-display">
      <div className="blog-wrapper">
        <div className='blog-wrapper-2'>
      {data.map((item) => {
        return (
          <div key={item.id} className="blog-container">
            <div className="sections-1">
              <img
                src={item.picture}
                alt={item.title}
              />
            </div>
            <div className="sections-2">
              <div className="profile">
                <img src={item.avtar} alt={item.title}/>
                <p>{item.first_name}</p>
                <p>{item.created_at}</p>
              </div>
              <div className="content">
                <h4>{item.title}</h4>
                <p>
                  {item.descript.length > 70
                    ?item.descript.slice(0,70) + "..."
                    :item.descript}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      </div>
      </div>
    </div>
  );
};

export default Blog;
