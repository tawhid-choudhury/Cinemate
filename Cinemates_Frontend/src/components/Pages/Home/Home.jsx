import CardCarousel from "../../HomepageComponents/CardsCarousel/CardCarousel";
import Carousel from "../../HomepageComponents/Carousel/Carousel";
import RecentFeedCard from "./RecentFeedCard";
import Footer from "../../HomepageComponents/Footer/Footer"; // Adjust the path as u want

const Home = () => {
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
                            <RecentFeedCard />
                            <RecentFeedCard />
                            <RecentFeedCard />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-5xl font-semibold py-10">Featured Today</h1>
                <CardCarousel />
            </div>
            <div>
                <h1 className="text-5xl font-semibold py-10">Top Rated</h1>
                <CardCarousel />
            </div>
            <div>
                <h1 className="text-5xl font-semibold py-10">Most Recommended</h1>
                <CardCarousel />
            </div>

            {/* Footer is included here */}
            <Footer />
        </div>
    );
};

export default Home;