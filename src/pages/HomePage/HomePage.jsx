import { useEffect, useState } from "react";
import MoviseList from "../../components/MovieList/MovieList";
import { fetchFilmList } from "../../movies-api";

export default function HomePage() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    fetchFilmList()
      .then((films) => {
        setFilms(films);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <h2>What see now</h2>
      <MoviseList films={films} />
    </div>
  );
}
