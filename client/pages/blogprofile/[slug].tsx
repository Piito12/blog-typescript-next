import React,{FC} from "react";
import {useRouter} from "next/router";
import Link from "next/link";

interface blogProfileProps {
    name : string;
    title : string;
    descript : string;
    picture : string;
    avtar : string;
    created_at : string;
    first_name : string;
    id : number;
}



 const BlogProfile:FC<blogProfileProps> = () => {
    const rounter  = useRouter();
    const slug = rounter.query.slug;
    
    return (
    <div className="blog-profile">
        <div>THIS BLOG PROFILE ${slug}</div>
        <Link href="/">Return</Link>
    </div>
    )
}

export default BlogProfile;