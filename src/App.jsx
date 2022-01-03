import styles from "./App.module.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MoviesDatails from "./pages/MovieDetails";
import LandingPage from "./pages/LandingPage";
function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* <Route path="*" element={<div>Not found</div>} /> */}
        <Route path="/movie/:id" element={<MoviesDatails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
