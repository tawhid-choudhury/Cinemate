import React from 'react';
import { FaFire, FaHeart, FaHeartBroken, FaRegHeart, FaRegMeh } from 'react-icons/fa';
import { GiFire } from 'react-icons/gi';

const AboutCineMates = () => {
  return (
    <div className="bg-gray-100 p-8">
      {/* About CineMates Section */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">About CineMates</h2>
        <p className="text-gray-700 text-base md:text-lg">
          CineMates is more than just a platform to find movies—it's a social experience. We designed CineMates as a dynamic platform to bring friends and movie enthusiasts closer by sharing, discovering, and recommending their favorite movies. CineMates turns every interaction into a chance to discover something new. With features like personalized feeds, top-rated movie rankings, and real-time recommendations, CineMates is your go-to destination for everything cinematic.
        </p>
      </section>

      {/* About CineFire Scale Section */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">About CineFire Scale</h2>
        <p className="text-gray-700 text-base md:text-lg">
          Introducing the 'CineFire Scale'— a fun and intuitive way to help users rate movies based on their overall experience.
        </p>

        <ul className="list-none space-y-2 mt-4">
          <li className="flex items-center">
            <GiFire className="text-red-500 mr-2" size={24} />
            <span>(Flame Icon) (7 to 10) The most rated movies by CineMates users, offering a cinematic experience that’s truly on fire.</span>
          </li>
          <li className="flex items-center">
            <FaFire className="text-yellow-500 mr-2" size={24} />
            <span>(Sprinkle Icon) (4-7) The movies might not set the world on fire, but they’ve got a spark.</span>
          </li>
          <li className="flex items-center">
            <FaRegMeh className="text-gray-500 mr-2" size={24} />
            <span>(Smoke Icon) (0-4) The movies that just couldn't hit the fire scale, whether for poor storytelling or lackluster performances.</span>
          </li>
        </ul>
      </section>

      {/* About CineLove Meter Section */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">About CineLove Meter</h2>
        <p className="text-gray-700 text-base md:text-lg">
          Introducing the 'CineLove Meter' indicates how much % of users recommends a movie to the community.
        </p>

        <ul className="list-none space-y-2 mt-4">
          <li className="flex items-center">
            <FaHeart className="text-red-500 mr-2" size={24} />
            <span>(Full Heart Icon) (70%-100%): A highly loved movie by the community.</span>
          </li>
          <li className="flex items-center">
            <FaRegHeart className="text-yellow-500 mr-2" size={24} />
            <span>(Half Heart Icon) (40%-70%): A movie with mixed reactions.</span>
          </li>
          <li className="flex items-center">
            <FaHeartBroken className="text-gray-500 mr-2" size={24} />
            <span>(Empty Heart Icon) (0%-40%): A movie that didn’t quite capture the hearts of the users.</span>
          </li>
        </ul>
      </section>

      {/* About CineFeed Section */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">About CineFeed</h2>
        <p className="text-gray-700 text-base md:text-lg">
          CineFeed is where the CineMates community comes alive. Here, users can post their latest movie ratings, share recommendation percentages, and write short reviews of the films they’ve recently watched. Friends can comment, discuss, and even repost these updates, creating a lively conversation around every film. Even if you’re just browsing, CineFeed gives you a real-time look at what’s trending among your friends and the wider community, making it easier than ever to stay in the loop and discover new films to watch.
        </p>
      </section>

      {/* About Browsing Movies Using Various Filters Section */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">About Exploring Movies</h2>
        <p className="text-gray-700 text-base md:text-lg">
          CineMates makes it easy to find exactly what you’re in the mood for. With our advanced filtering options, you can browse movies by genre, release year, rating, or even mood.
        </p>
      </section>

      {/* About Certified 'Underrated' Movies Section */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">About Certified 'Underrated' Movies</h2>
        <p className="text-gray-700 text-base md:text-lg">
          CineMates proudly showcases certified 'underrated' movies—hidden gems that might not have received the spotlight they deserved. These are films that flew under the radar but are highly recommended by our users for their unique storytelling, compelling performances, or simply being ahead of their time. Don’t miss out on these hidden gems; they might just become your next favorite.
        </p>
      </section>
    </div>
  );
};

export default AboutCineMates;