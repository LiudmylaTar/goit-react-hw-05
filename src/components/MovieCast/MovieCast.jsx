import { useEffect, useState } from "react";
import { fetchCast } from "../../movies-api";
import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css";
import Loader from "../Loader/Loader";

export default function MovieCast() {
  const [actors, setActors] = useState([]);
  const { filmId } = useParams();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    fetchCast(filmId)
      .then((actors) => setActors(actors))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [filmId]);

  return (
    <div>
      <h2>Cast list</h2>
      {isLoading && <Loader loading={isLoading} />}
      {isError && <p>Something went wrong while loading cast information.</p>}
      {!isLoading && !isError && actors.length === 0 && (
        <p>We don’t have any cast information for this movie.</p>
      )}
      {!isLoading && !isError && (
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
                <p>
                  {" "}
                  <strong>Character:</strong> {actor.character}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
