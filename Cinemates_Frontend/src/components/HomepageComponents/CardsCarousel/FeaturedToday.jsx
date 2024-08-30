import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Pagination } from 'swiper/modules';
import Card from '../Card/Card';


// Fetching featured movies function
const fetchFeaturedMovies = async () => {
    const response = await axios.get('https://cinemate-backend-development.onrender.com/movies/featured_today');
    console.log(response.data)
    return response.data;
};

const FeaturedToday = () => {
    // Using TanStack Query with object syntax (v5)
    const { data, isLoading, error } = useQuery({
        queryKey: ['featuredMovies'],
        queryFn: fetchFeaturedMovies,
    });

    // Log the received data to the console
    useEffect(() => {
        if (data) {
            console.log('Fetched Data:', data);
        }
    }, [data]);

    // Handling loading state
    if (isLoading) {
        return <p>Loading...</p>;
    }

    // Handling error state
    if (error) {
        return <p>Error: {error.message}</p>;
    }

    // Rendering movies in SwiperSlide
    return (
        <div className=''>
            <Swiper
                slidesPerView={5}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {data.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <Card
                            title={movie.name}
                            poster={movie.poster}
                            imdbRating={movie.imdb_rating}
                            age={movie.age}
                            genres={movie.genres}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default FeaturedToday;
