import { useEffect, useState } from "react";
import axios from "axios";
import MoviseList from "../../components/MovieList/MovieList";

const options = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzlkYzYwOTVkNjgzMDExZWRhMDdlNWRhMDA2YWE4MCIsIm5iZiI6MTc0NzExODQ0Mi40NzQsInN1YiI6IjY4MjJlOTZhNzNiMzVhMDcxMDdlODE2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uV8mbGkCYQRGm6_nLyMYoQ8DmN36gNJNk_8VReaA58A",
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
