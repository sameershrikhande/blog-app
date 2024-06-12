// import React from 'react'
// import appwriteService from '../appwrite/config'
// import {Link} from 'react-router-dom'


// function PostCard({$id, title, featuredImage}) {            // Appwrite uses $id instead of id
//   return (
//     <Link to={`/post/${$id}`}>                            
//     <div className='w-full bg-gray-100 rounded-xl p-4'>
//         <div className='w-full justify-center mb-4'>
//             <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />
//         </div>
//         <h2 className='text-xl font-bold'>{title}</h2>
//     </div>
//     </Link>
//   )
// }

// export default PostCard


// import React from 'react';
import appwriteService from '../appwrite/config';
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) { // Appwrite uses $id instead of id
  return (
    <Link to={`/post/${$id}`}
    className=''>
      {/* <div className='w-full bg-gray-100 rounded-xl p-4'> */}
      <div className='card card-compact w-72 bg-base-100 shadow-lg '>
        <div className='w-full justify-center mb-4 p-1'>
          <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl w-full'/>
        </div>
        <h2 className='card-title text-left mt-2'>{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
