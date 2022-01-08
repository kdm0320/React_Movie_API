import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({
  movie,
  background_image,
  cover_image,
  title,
  rating,
  runtime,
  year,
  genres,
}) {
  return (
    <div>
      <img src={background_image} alt={title} />
      <img src={cover_image} alt={title} />
      <h2>{title}</h2>
      <ul>
        <li>year :{year}</li>
        <li>Rating :{rating}</li>
        <li>runtime :{runtime}</li>
      </ul>
      {movie.hasOwnProperty("genres") ? (
        <>
          <h4>Genres</h4>
          <ul>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </>
      ) : (
        <h3>UnKnown</h3>
      )}
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
