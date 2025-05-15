import { useEffect, useState } from "react";
import css from "./MovieDetailsPage.module.css";
import { NavLink, useParams, Outlet } from "react-router-dom";

import MovieDetail from "../../components/MovieDetails/MovieDetails";

import { fetchDetailsFilm } from "../../movies-api";
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
    fetchDetailsFilm(filmId).then((film) => setFilm(film));
  }, [filmId]);
  return (
    <div className={css.wrapper}>
      {film && <MovieDetail film={film} />}
      <ul className={css.nav_list}>
        <li>
          <NavLink
            to="cast"
            className={({ isActive }) =>
              isActive ? `${css.nav_link} ${css.active}` : css.nav_link
            }
          >
            Cast list
          </NavLink>
        </li>
        <li>
          <NavLink
            to="reviews"
            className={({ isActive }) =>
              isActive ? `${css.nav_link} ${css.active}` : css.nav_link
            }
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
