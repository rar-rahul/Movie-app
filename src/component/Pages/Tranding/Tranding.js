import axios from "axios";
import React, { useEffect, useState } from "react";
import SingelContent from "../../singelContent/SingelContent";
import './Trending.css';
import CustomePagination from "../../Pagination/CustomePagination"

const Tranding = () => {
  const [content, setContent] = useState([]);
  const [page,setPage] = useState(1);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );

    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
    //eslint-disable-next-line
  },[page]);

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
      <CustomePagination setPage={setPage}/>
    </div>
  );
};

export default Tranding;
