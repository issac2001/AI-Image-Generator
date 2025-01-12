import React from 'react'

import { download } from '../assets';
import { downloadImage } from '../utils';

const Card = ({_id, name, prompt, photo}) => {
  return (
    <div className='rounded-xl group relative shadow-card hover:shadow-cardhover card'>
      <img className='w-full h-auto object-cover rounded-xl' 
         src={photo} 
         alt={prompt} />
      <div className='group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md'>
        <p className='text-white'>{prompt}</p>
      </div>      
    </div>
  )
}

export default Card;
