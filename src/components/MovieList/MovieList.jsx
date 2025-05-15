import css from "./MovieList.module.css";
import { Link } from "react-router-dom";

export default function MoviseList({ films }) {
  return (
    <ul className={css.list}>
      {films.map((film) => (
        <li key={film.id} className={css.item}>
          <img
            className={css.img}
            src={
              film.poster_path
                ? `https://image.tmdb.org/t/p/w200${film.poster_path}`
                : "https://via.placeholder.com/200x300?text=No+Image"
            }
            alt={film.title}
          />
          <div className={css.info}>
            <h3 className={css.title}>{film.title}</h3>
            <p className={css.year}>Rating: {film.vote_average.toFixed(1)}</p>
            <Link to={`/movies/${film.id}`} className={css.link}>
              Read more
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
