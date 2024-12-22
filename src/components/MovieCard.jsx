import React from 'react';

const MovieCard = ({ title, imageUrl, year, duration, rating, onClick }) => {
  return (
    <div 
      className="movie-card bg-[#232323] rounded-lg shadow-xl overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105"
      onClick={onClick}
    >
      {/* Image Section */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Movie Info Section */}
      <div className="p-2"> {/* Reduced padding */}
        <h3 className="movie-title text-sm font-medium text-[#dddddd] truncate mb-2">{title}</h3>
        
        {/* Conditional Rendering for Year, Duration, and Rating Section */}
        {(year || duration || rating) && (
          <div className="flex justify-between items-center text-xs text-[#dddddd] space-x-1"> {/* Reduced spacing */}
            {year && <span>{year}</span>}
            {duration && <span className="whitespace-nowrap flex-shrink-0">{duration}min</span>}
            {rating && (
              <span className="flex items-center flex-shrink-0">
                <i className="fas fa-star text-[#ddd] mr-1"></i> 
                <span>{rating}</span>
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
