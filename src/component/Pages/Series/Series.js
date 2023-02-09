import axios from "axios";
import React,{useEffect, useState} from "react";
import Genres from "../../Genres/Genres";
import useGenres from "../../hooks/useGenres"
import SingelContent from "../../singelContent/SingelContent";
import './Trending.css';
import CustomePagination from "../../Pagination/CustomePagination"
const Series = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numofpages,setNumOfPages] = useState();
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genreforURL = useGenres(selectedGenres);
  const fetchSeries = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate&with_genres=${genreforURL}`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchSeries();
    //eslint-disable-next-line
  },[page,genreforURL]);

  return (
    <div>
     <span className="pageTitle">Movies</span>

     <Genres
        type="tv"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />

<div className="trending">
  {content && content.map((m) => (
  <SingelContent key={m.id} 
      id={m.id}
      poster={m.poster_path}
      title={m.title || m.name}
      date={m.first_air_date || m.release_date}
      media_type='tv'
      vote_average={m.vote_average}
  
  />
  ))}
</div>
<CustomePagination setPage={setPage} numofpages={numofpages}/>
    </div>
  );
};

export default Series;
