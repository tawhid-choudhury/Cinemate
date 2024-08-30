import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Card from '../Card/Card';


// Fetching featured movies function
const fetchTopRated = async () => {
    const response = await axios.get('https://cinemate-backend-development.onrender.com/movies/top_rated');
    console.log(response.data.data)
    return response.data.data;
};
const Toprated = () => {
    // Using TanStack Query with object syntax (v5)
    const { data, isLoading, error } = useQuery({
        queryKey: ['topRated'],
        queryFn: fetchTopRated,
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
        <div className="my-10">
            {/* <h2 className="text-3xl font-bold mb-6">Featured Today</h2> */}
            <Swiper
                slidesPerView={5}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {data.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <Card
                            title={movie.title}
                            poster={movie.poster}
                            imdbRating={movie.imdb_rating}
                            age={movie.age}
                            genres={movie.genre}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Toprated;
