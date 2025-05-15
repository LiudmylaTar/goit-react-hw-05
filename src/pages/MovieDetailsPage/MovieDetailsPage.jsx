import { useEffect, useState } from "react";
import css from "./MovieDetailsPage.module.css";
import { NavLink, useParams, Outlet } from "react-router-dom";
import axios from "axios";
import MoviseDetail from "../../components/MovieDetails/MovieDetails";

const options = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
};
const MovieDetailsPage = () => {
  const { filmId } = useParams();
  const [film, setFilm] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${filmId}?language=en-US`,
        options
      )
      .then((res) => setFilm(res.data));
  }, [filmId]);
  return (
    <div>
      {film && <MoviseDetail film={film} />}
      <ul>
        <li>
          <NavLink to="cast">Cast list</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
