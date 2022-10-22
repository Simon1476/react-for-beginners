import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../Detail.module.css';
function Detail() {
  const {id} = useParams();
  const [movie, setMovie] = useState({});
  const getMovie = async () => {
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    const json = await response.json();
    setMovie(json.data.movie);
  }
  
  console.log(movie)
  useEffect(() => {
    getMovie();
  }, []);

  
  return (
    <div className={styles.detail_container}>
      <h1 className={styles.detail_title}>{movie.title}</h1>
      <img  className={styles.detail_bgimg} src={movie.background_image} alt={movie.background_image} />
      <div className={styles.detail_desc}>
        {/* <div className={styles.detail_intro}></div>
        <div className={styles.detail_runtime}>
        <div className={styles.detail_rating}></div> */}
        <div>Intro : {movie.description_intro}</div>
        <div>Runtime : {movie.runtime}</div>
        <div>Rating : {movie.rating}</div>
      </div>
    </div>
  );
}
export default Detail;