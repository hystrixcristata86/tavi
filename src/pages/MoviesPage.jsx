import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiKey = SECRET_KEY;
  const baseURL = 'https://api.themoviedb.org/3';

  const fetchMovies = async () => {
    try {
      const response = await fetch(`${baseURL}/discover/movie?api_key=${apiKey}&language=en`);
      const data = await response.json();
      setMovies(data.results);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  if (loading) {
    return (
      <div className="loading-screen text-center py-20 min-h-screen flex items-center justify-center">
        <h3 className="text-black">Loading...</h3>
      </div>
    );
  }

  return (
    <div className="movies-page bg-[#171717] min-h-screen px-4 flex flex-col">
      {/* Movie List Section */}
      <section className="flex-grow mt-10 mb-20">
        <h2 className="section-title text-xl text-white font-bold mb-4">Movies</h2>
        <div className="movie-list grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              year={new Date(movie.release_date).getFullYear()}
              duration={movie.runtime || 120} // Default to 120 if runtime is not available
              rating={movie.vote_average.toFixed(1)} // Limit rating to one decimal
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default MoviesPage;
