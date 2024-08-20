import Carousel from "../../HomepageComponents/Carousel/Carousel";
import RecentFeedCard from "./RecentFeedCard";

const Home = () => {
    return (
        <div className="grid grid-cols-3 max-w-[1852px] gap-5">
            <div className="col-span-2">
                <h1 className="text-5xl font-semibold py-10">Trending Now</h1>
                <Carousel />
            </div>
            <div className=" ">
                <div className="w-full">
                    <h1 className="text-4xl font-semibold py-10 text-[#FF5757]">Recent Feed</h1>
                    <RecentFeedCard />
                    <RecentFeedCard />
                    <RecentFeedCard />
                </div>
            </div>
        </div>
    );
};

export default Home;