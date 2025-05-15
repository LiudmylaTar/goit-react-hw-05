import { useEffect, useState } from "react";
import { fetchCast } from "../../movies-api";
import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const [actors, setActors] = useState([]);
  const { filmId } = useParams();
  useEffect(() => {
    fetchCast(filmId).then((actors) => setActors(actors));
  }, [filmId]);

  return (
    <div>
      <h2>Cast list</h2>
      <ul>
        {actors.map((actor) => (
          <li key={actor.id} className={css.item}>
            <img
              className={css.img}
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : "https://via.placeholder.com/200x300?text=No+Image"
              }
              alt={actor.name}
            />
            <div className={css.info}>
              <h3 className={css.name}>{actor.name}</h3>
              <p> Character: {actor.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
