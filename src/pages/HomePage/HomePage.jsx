import { useEffect, useState } from "react";
import axios from "axios";
import MoviseList from "../../components/MovieList/MovieList";

const options = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
};
export default function HomePage() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
        options
      )
      .then((response) => {
        setFilms(response.data.results);
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
