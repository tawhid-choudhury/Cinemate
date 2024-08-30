import FeaturedToday from "../../HomepageComponents/CardsCarousel/FeaturedToday";
import Carousel from "../../HomepageComponents/Carousel/Carousel";
import RecentFeedCard from "./RecentFeedCard";

const Home = () => {
    const cardData = {
        imageUrl: "https://i.ibb.co/bWc7krr/MV5-BNz-Ri-Mjg0-Mz-Ut-NTQ1-Mi00-Y2-Q5-LWEw-M2-Mt-Mz-Uw-ZDU5-Nm-Vj-N2-Nk-Xk-Ey-Xk-Fqc-Gc-V1-FMjpg-UX1.jpg",
        title: "Deadpool & Wolverine",
        username: "Sajid",
        avatarUrl: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
        rating: 5,
        likes: 12,
        description: "Deadpool is offered a place in the Marvel Cinematic Universe by the Time Variance Authority."
    };
    const cardData2 = {
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_SX300.jpg",
        title: "Deadpool & Wolverine",
        username: "Sajid",
        avatarUrl: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
        rating: 5,
        likes: 12,
        description: "Deadpool is offered a place in the Marvel Cinematic Universe by the Time Variance Authority."
    };
    const cardData3 = {
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg",
        title: "Deadpool & Wolverine",
        username: "Sajid",
        avatarUrl: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
        rating: 5,
        likes: 12,
        description: "Deadpool is offered a place in the Marvel Cinematic Universe by the Time Variance Authority."
    };
    return (
        <div>
            <div className="grid grid-cols-3 max-w-[1852px] gap-5">
                <div className="col-span-2">
                    <h1 className="text-5xl font-semibold py-10">Trending Now</h1>
                    <Carousel />
                </div>
                <div className=" ">
                    <div className="w-full">
                        <h1 className="text-4xl font-semibold py-10 text-[#FF5757]">Recent Feed</h1>
                        <div className="flex flex-col justify-between items-center h-[525px] bg-">
                            <RecentFeedCard {...cardData} />
                            <RecentFeedCard {...cardData2} />
                            <RecentFeedCard {...cardData3} />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-5xl font-semibold py-10">Featured Today</h1>
                <FeaturedToday />
            </div>
            <div>
                <h1 className="text-5xl font-semibold py-10">Top Rated</h1>
                {/* <CardCarousel /> */}
            </div>
            <div>
                <h1 className="text-5xl font-semibold py-10">Most Recommended</h1>
                {/* <CardCarousel /> */}
            </div>
        </div>
    );
};

export default Home;