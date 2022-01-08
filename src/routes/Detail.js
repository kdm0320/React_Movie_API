import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";

function Detail() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(movies);
  return (
    <div>
      <img src={movies.medium_cover_image} alt={movies.title} />
      <h2>{movies.title_long}</h2>
      <ul>
        <li>Year :{movies.year}</li>
        <li>Rating :{movies.rating}</li>
        <li>runtime :{movies.runtime}</li>
      </ul>
      {movies.hasOwnProperty("genres") ? (
        <>
          <h4>Genres</h4>
          <ul>
            {movies.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </>
      ) : (
        <h3>UnDefined</h3>
      )}
    </div>
  );
}
export default Detail;
