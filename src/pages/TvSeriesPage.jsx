import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

function TvSeriesPage() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiKey = 'a60c46cec767f3618b59526a83b1c434';
  const baseURL = 'https://api.themoviedb.org/3';

  const fetchSeries = async () => {
    try {
      const response = await fetch(`${baseURL}/discover/tv?api_key=${apiKey}&language=en`);
      const data = await response.json();
      setSeries(data.results);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching series:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSeries();
  }, []);

  if (loading) {
    return (
      <div className="loading-screen text-center py-20 min-h-screen flex items-center justify-center">
        <h3 className="text-black">Loading...</h3>
      </div>
    );
  }

  return (
    <div className="tvseries-page bg-[#171717] min-h-screen px-4 flex flex-col">
      <section className="flex-grow mt-10 mb-20">
        <h2 className="section-title text-xl text-white font-bold mb-4">TV Series</h2>
        <div className="tvseries-list grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {series.map((tv) => (
            <MovieCard
              key={tv.id}
              title={tv.name}
              imageUrl={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
              year={new Date(tv.first_air_date).getFullYear()}
              duration={tv.episode_run_time && tv.episode_run_time.length > 0 ? tv.episode_run_time[0] : 45}
              rating={tv.vote_average.toFixed(1)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default TvSeriesPage;
