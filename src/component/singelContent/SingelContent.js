import { Badge } from '@material-ui/core';
import React from 'react'
import { img_300, unavailable } from '../config/config'
import ContentModal from '../ContentModel/ContentModal';
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
    <ContentModal media_type={media_type} id={id}>
      <Badge badgeContent={vote_average} color={vote_average > 6 ?"primary":"secondary"}/>
       <img className='poster' src={poster ? `${img_300}/${poster}` : unavailable}  alt={title}/>
       <b className='title'>{title}</b>
       <span>{media_type === "tv" ? "Tv Series" : "Movie"}</span>
       <span className='subTitle'>{date}</span>
    </ContentModal>
  )
}

export default SingelContent