import React from 'react'
import { img_300, unavailable } from '../config/config'
import './singelContent.css';
const SingelContent = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average
}) => {
  return (
    <div className='media'>
       <img className='poster' src={poster ? `${img_300}/${poster}` : unavailable}  alt={title}/>
       <b className='title'>{title}</b>
       <span>{media_type === "tv" ? "Tv Series" : "Movie"}</span>
       <span className='subTitle'>{date}</span>
    </div>
  )
}

export default SingelContent