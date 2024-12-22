import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import { FaSearch } from 'react-icons/fa';
import { NavLink } from 'react-router';

function Header() {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchText, setSearchText] = useState('');
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signin');
  };

  const toggleSearch = () => {
    setSearchExpanded(!searchExpanded);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleBlur = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.relatedTarget)) {
      setSearchExpanded(false);
    }
  };

  return (
    <header className="flex justify-between items-center py-4 px-6 bg-gray-700 shadow-lg">
      <div className="flex items-center space-x-20">
        <NavLink to="/">
          <img src="images/logo.png" alt="Logo" className="h-8 w-auto" />
        </NavLink>
        <nav>
          <ul className="flex space-x-4">
            <li><NavLink to="/home" className="text-white transition-all text-md">Home</NavLink></li>
            <li><NavLink to="/genres" className="text-white transition-all text-md">Genres</NavLink></li>
            <li><NavLink to="/movies" className="text-white transition-all text-md">Movies</NavLink></li>
            <li><NavLink to="/tvseries" className="text-white transition-all text-md">TV Series</NavLink></li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        <button className="bg-[#FF007F] text-white px-6 py-2 rounded-md hover:bg-[#D1006D] transition-all" onClick={handleClick}>
          Sign In
        </button>
        <div
          ref={searchRef}
          className={`relative ${searchExpanded ? 'w-64' : 'w-10'} flex items-center border-2 border-white rounded-md overflow-hidden transition-all duration-300`}
          onBlur={handleBlur}
        >
          {searchExpanded && (
            <input
              type="text"
              value={searchText}
              onChange={handleSearchChange}
              className="bg-gray-600 text-white w-full outline-none px-2"
              placeholder="Search..."
              style={{ height: '35px', overflow: 'hidden' }} // Matching height of Sign In button
            />
          )}
          <button className="bg-transparent text-white p-2 flex items-center justify-center" style={{ height: '35px' }} onClick={toggleSearch}>
            <FaSearch size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
