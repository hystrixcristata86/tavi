import { Routes, Route } from 'react-router';
import LandingPage from '../pages/LandingPage';
import HomePage from '../pages/HomePage';
import GenresPage from '../pages/GenresPage';
import MoviesPage from '../pages/MoviesPage';
import TvSeriesPage from '../pages/TvSeriesPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import MainLayout from '../layouts/MainLayout';


function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/genres" element={<GenresPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/tvseries" element={<TvSeriesPage />} />  
        <Route path="/signin" element={<SignInPage />} />  
        <Route path="/signup" element={<SignUpPage />} />  
      </Route>
    </Routes>
  );
}

export default Router;
