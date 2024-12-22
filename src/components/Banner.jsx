import { useNavigate } from 'react-router';

function Banner() {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate('/home');
    };

  return (
    <div 
      className="relative flex items-center justify-start py-20 bg-cover bg-center h-screen" 
      style={{ backgroundImage: "url('images/hero-bg.jpg')" }}
    >
      {/* Overlay for opacity */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      <div className="pl-20 relative z-10">
        <h2 className="text-6xl font-bold text-white mb-4">
          Watch the Best Movies<br />Anytime You Want!
        </h2>
        <p className="text-lg text-white mb-6 max-w-3xl">
          Enjoy HD streaming with no interruptions. From the hottest new releases to your all-time favorites, dive into a world of entertainment tailored to your tastes.
        </p>
        <div className="space-x-4">
          <button className="bg-[#FF007F] text-white px-8 py-4 rounded-lg shadow-lg hover:bg-[#D1006D] hover:scale-105 transition-all duration-200 ease-in-out" onClick={handleClick}>
            Discover Movies & TV Shows
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
