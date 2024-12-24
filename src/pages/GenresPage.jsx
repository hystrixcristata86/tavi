import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

function GenresPage() {
  const [genres, setGenres] = useState([]);
  const [genrePosters, setGenrePosters] = useState({});
  const [loading, setLoading] = useState(true);

  const tmdbApiKey = import.meta.env.SECRET_KEY;
  const baseURL = 'https://api.themoviedb.org/3';

  const fetchGenres = async () => {
    try {
      const response = await fetch(`${baseURL}/genre/movie/list?api_key=${tmdbApiKey}&language=en`);
      const data = await response.json();
      setGenres(data.genres);
      fetchPosters(data.genres);
    } catch (error) {
      console.error('Error fetching genres:', error);
      setLoading(false);
    }
  };

  const fetchPosters = async (genres) => {
    try {
      const posters = {};
      const usedPosters = new Set();

      await Promise.all(
        genres.map(async (genre) => {
          const response = await fetch(`${baseURL}/discover/movie?api_key=${tmdbApiKey}&with_genres=${genre.id}&language=en`);
          const data = await response.json();

          for (const movie of data.results) {
            const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            if (movie.poster_path && !usedPosters.has(posterUrl)) {
              posters[genre.id] = posterUrl;
              usedPosters.add(posterUrl);
              break;
            }
          }

          if (!posters[genre.id] && data.results.length > 0) {
            // In case all posters are used, assign the last one (least preferred option)
            const fallbackPoster = `https://image.tmdb.org/t/p/w500${data.results[data.results.length - 1].poster_path}`;
            posters[genre.id] = fallbackPoster;
          }
        })
      );

      setGenrePosters(posters);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching posters:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  if (loading) {
    return (
      <div className="loading-screen text-center py-20 min-h-screen flex items-center justify-center">
        <h3 className="text-black">Loading...</h3>
      </div>
    );
  }

  return (
    <div className="genres-page bg-[#171717] min-h-screen px-4 flex flex-col">
      {/* Genres List Section */}
      <section className="flex-grow mt-10 mb-20">
        <h2 className="section-title text-xl text-white font-bold mb-4">Genres</h2>
        <div className="genres-list grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {genres.map((genre) => (
            <MovieCard
              key={genre.id}
              title={genre.name}
              imageUrl={genrePosters[genre.id] || `https://via.placeholder.com/500x750?text=${genre.name}`}
              year="" 
              duration="" 
              rating="" 
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default GenresPage;
