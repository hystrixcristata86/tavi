import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

function HomePage() {
  const [trending, setTrending] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);
  const [latestTVSeries, setLatestTVSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiKey = import.meta.env.VITE_SECRET_KEY;
  const baseURL = 'https://api.themoviedb.org/3';

  const fetchTrending = async () => {
    try {
      const response = await fetch(`${baseURL}/trending/all/day?api_key=${apiKey}&language=en`);
      const data = await response.json();
      setTrending(data.results);
    } catch (error) {
      console.error('Error fetching trending:', error);
    }
  };

  const fetchLatestMovies = async () => {
    try {
      const response = await fetch(`${baseURL}/movie/now_playing?api_key=${apiKey}&language=en`);
      const data = await response.json();
      setLatestMovies(data.results);
    } catch (error) {
      console.error('Error fetching latest movies:', error);
    }
  };

  const fetchLatestTVSeries = async () => {
    try {
      const response = await fetch(`${baseURL}/tv/on_the_air?api_key=${apiKey}&language=en`);
      const data = await response.json();
      setLatestTVSeries(data.results);
    } catch (error) {
      console.error('Error fetching latest TV series:', error);
    }
  };

  useEffect(() => {
    const fetchAllData = async () => {
      await Promise.all([fetchTrending(), fetchLatestMovies(), fetchLatestTVSeries()]);
      setLoading(false);
    };
    fetchAllData();
  }, []);

  if (loading) {
    return (
      <div className="loading-screen text-center py-20 min-h-screen flex items-center justify-center">
        <h3 className="text-black">Loading...</h3>
      </div>
    );
  }

  return (
    <div className="home-page bg-[#171717] min-h-screen px-4 flex flex-col">
      {/* Trending Section */}
      <section className="trending-section flex-grow mt-10 mb-20">
        <h2 className="section-title text-xl text-white font-bold mb-4">Trending</h2>
        <div className="movie-list grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {trending.map((item) => (
            <MovieCard
              key={item.id}
              title={item.title || item.name}
              imageUrl={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              year={new Date(item.release_date || item.first_air_date).getFullYear()}
              rating={item.vote_average.toFixed(1)}
            />
          ))}
        </div>
      </section>

      {/* Latest Movies Section */}
      <section className="latest-movies-section flex-grow mb-20">
        <h2 className="section-title text-xl text-white font-bold mb-4">Latest Movies</h2>
        <div className="movie-list grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {latestMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              year={new Date(movie.release_date).getFullYear()}
              rating={movie.vote_average.toFixed(1)}
            />
          ))}
        </div>
      </section>

      {/* Latest TV Series Section */}
      <section className="latest-tv-series-section flex-grow mb-20">
        <h2 className="section-title text-xl text-white font-bold mb-4">Latest TV Series</h2>
        <div className="movie-list grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {latestTVSeries.map((series) => (
            <MovieCard
              key={series.id}
              title={series.name}
              imageUrl={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
              year={new Date(series.first_air_date).getFullYear()}
              rating={series.vote_average.toFixed(1)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
