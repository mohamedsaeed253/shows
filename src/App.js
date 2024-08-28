//Libraries
import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Pages
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Shows from "./Components/Shows";
import Movies from "./Components/Movies";
import Series from "./Components/Series";
import Show, { showLoader } from "./Components/Show/Show";
import Login from "./Components/Sign in/Login";
import Register from "./Components/Sign in/Register";

function App() {
  let [showsList, setShowsList] = useState([]);
  let [moviesList, setMoviesListList] = useState([]);
  let [seriesList, setSeriesListList] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    let { data } = await axios.get(
      "https://api.themoviedb.org/3/trending/all/day?api_key=c9fac173689f5f01ba1b0420f66d7093"
    );
    let { results } = data;
    console.log(results);
    setShowsList(results);
    setMoviesListList(
      results.filter((movie) => {
        return movie.media_type === "movie";
      })
    );
    setSeriesListList(
      results.filter((tv) => {
        return tv.media_type === "tv";
      })
    );
  }
  const showRouter = (
    <Route
      path=":id"
      loader={showLoader}
      element={<Show showsList={showsList} />}
    ></Route>
  );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="" element={<Navbar />}>
        <Route path="/" element={<Shows showsList={showsList} />}>
          {showRouter}
        </Route>
        <Route path="movies" element={<Movies moviesList={moviesList} />}>
          {showRouter}
        </Route>
        <Route path="series" element={<Series seriesList={seriesList} />}>
          {showRouter}
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
