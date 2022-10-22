import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import styles from '../Movie.module.css';
function Movie({id, medium_cover_image, title, summary, genres}) {
  return (
    <div className={styles.movie_container}>
      <img src={medium_cover_image}  />
      <div>
        <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{summary}</p>
        <ul className={styles.movie_generes}>
          
            {genres.map((g) => 
              (
              <li key={g}>{g}</li>
            ))}
          
        </ul>
      </div>
    </div>
  );
}

Movie.prototype = {
  id:PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  summary:PropTypes.string.isRequired,
  genres:PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
