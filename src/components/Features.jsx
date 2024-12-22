import { MdOutlineMovieFilter } from "react-icons/md";
import { RiPlayCircleLine } from "react-icons/ri";
import { GiWorld } from "react-icons/gi";

function Features() {
  return (
    <div className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="group text-center transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-6">
              <div className="bg-[#FF007F] text-white w-24 h-24 flex items-center justify-center rounded-full text-6xl shadow-lg group-hover:shadow-pink-500/50 transition-shadow duration-300">
                <MdOutlineMovieFilter />
              </div>
            </div>
            <h4 className="text-3xl font-bold mb-4 text-white">
              Endless Entertainment
            </h4>
            <p className="text-lg text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
              Explore a variety of movies and shows that fit every mood and moment.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group text-center transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-6">
              <div className="bg-[#FF007F] text-white w-24 h-24 flex items-center justify-center rounded-full text-6xl shadow-lg group-hover:shadow-pink-500/50 transition-shadow duration-300">
                <RiPlayCircleLine />
              </div>
            </div>
            <h4 className="text-3xl font-bold mb-4 text-white">
              Smooth Streaming
            </h4>
            <p className="text-lg text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
              Enjoy uninterrupted streaming with high-quality playback on any device.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group text-center transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-6">
              <div className="bg-[#FF007F] text-white w-24 h-24 flex items-center justify-center rounded-full text-6xl shadow-lg group-hover:shadow-pink-500/50 transition-shadow duration-300">
                <GiWorld />
              </div>
            </div>
            <h4 className="text-3xl font-bold mb-4 text-white">
              Global Content
            </h4>
            <p className="text-lg text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
              Access exciting content from all over the world, all in one place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
