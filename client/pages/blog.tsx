import * as React from "react";
import { data } from "./data";
import Link from "next/link";

export interface IAppProps {}

const Blog: React.FC<IAppProps> = () => {
  const onSelect = (id :number) => {
    console.log(id);
    
  }
  return (
    <div className="blog-display">
      <div className="blog-wrapper">
        <div className='blog-wrapper-2'>
      {data.map((item) => {
        return (
          <div key={item.id} className="blog-container">
            <div className="sections-1">
                <Link href={`/blogprofile/${item.id}`}>
              <img
                src={item.picture}
                alt={item.title}
                onClick={() => onSelect(item.id)}

              />
              </Link>
            </div>
            <div className="sections-2">
              <div className="profile">
                <img src={item.avtar} alt={item.title}/>
                <p>{item.first_name}</p>
                <p>{item.created_at}</p>
              </div>
              <div className="content" onClick={()=> onSelect(item.id)}>
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
