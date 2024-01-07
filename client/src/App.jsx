import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/movies");
      const data = await response.json();
      console.log(data);
      setMovies(data);
    } catch (error) {
      throw new Error();
    }
  };
  return (
    <>
      <p>Haloo guys</p>
      <ul>
        {movies.map((movie) => (
          <li key={movie._id}>
            {movie.judul} - {movie.tahun}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
