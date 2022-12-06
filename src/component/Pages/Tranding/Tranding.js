import axios from "axios";
import React, { useEffect, useState } from "react";
import SingelContent from "../../singelContent/SingelContent";
import './Trending.css';

const Tranding = () => {
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`
    );

    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
  },[]);

  return (
    <div>
      <span className="pageTitle">Tranding</span>

      <div className="trending">
        {content && content.map((m) => (
        <SingelContent key={m.id} 
            id={m.id}
            poster={m.poster_path}
            title={m.title || m.name}
            date={m.first_air_date || m.release_date}
            media_type={m.media_type}
            vote_average={m.vote_average}
        
        />
        ))}
      </div>
    </div>
  );
};

export default Tranding;
