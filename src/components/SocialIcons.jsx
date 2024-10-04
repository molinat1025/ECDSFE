import React from 'react'
import { Link } from 'react-router-dom'
import {RiInstagramFill, RiYoutubeFill, RiFacebookFill} from 'react-icons/ri'


const SocialIcons = () => {
  return (
    <div className='flex gap-6 pr-4'>
        <Link to={''} className='text-[#FF0000] text-2xl hover:-translate-y-1 transition-all duration-500'><RiYoutubeFill /></Link>
        <Link to={''} className='text-[#FFC0CB] text-2xl hover:-translate-y-1 transition-all duration-500'><RiInstagramFill /></Link>
        <Link to={''} className='text-[#0000FF] text-2xl hover:-translate-y-1 transition-all duration-500'><RiFacebookFill /></Link>
    </div>
  )
}

export default SocialIcons