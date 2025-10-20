import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";
const PostCard = ({ $id, title, featuredImage }) => {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-200 hover:scale-[1.02]">
        <div className="w-full h-48">
          <img 
                src={appwriteService.getFileUrl(featuredImage)}
                alt={title} 
                className='w-full h-full object-cover' 
              />
        </div>
        <div className='p-4'>
            <h2 className='text-xl font-bold text-gray-900'>{title}</h2>
          </div>
      </div>
    </Link>
  );
};

export default PostCard;
