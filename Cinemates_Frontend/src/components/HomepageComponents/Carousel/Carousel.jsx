import { BsCollectionPlayFill } from "react-icons/bs";
import { LiaImdb } from "react-icons/lia";
import { GiTomato } from "react-icons/gi";
const Carousel = () => {
    return (
        <div className="carousel w-full h-[520px] relative rounded-lg overflow-hidden">
            <div id="slide1" className="carousel-item relative w-full h-full">
                <img
                    src="https://i.ibb.co/283HP0h/deadpool-wolverine-mobile-640x480-ad8020fd.jpg"
                    className="w-full h-full object-cover -z-40"
                    alt="Slide 1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-[#00000028] -z-20"></div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle btn-neutral">❮</a>
                    <a href="#slide2" className="btn btn-circle btn-neutral">❯</a>
                </div>
                <div>
                    <div className="absolute left-[100px] right-5 top-[220px] w-[800px]">
                        <div className="h-[250px] flex gap-10">
                            <div className="h-full">
                                <img className="h-full rounded-lg" src="https://i.ibb.co/bWc7krr/MV5-BNz-Ri-Mjg0-Mz-Ut-NTQ1-Mi00-Y2-Q5-LWEw-M2-Mt-Mz-Uw-ZDU5-Nm-Vj-N2-Nk-Xk-Ey-Xk-Fqc-Gc-V1-FMjpg-UX1.jpg" alt="" />
                            </div>
                            <div className="pt-5 text-white">
                                <h1 className="text-4xl font-semibold ">Deadpool & Wolverine</h1>
                                <p className="mt-5 text-lg flex items-center gap-2">
                                    <BsCollectionPlayFill className="text-2xl" />
                                    <span className="relative">
                                        Watch Trailer
                                        <span className="absolute left-0 bottom-0 w-1/2 h-[2px] bg-red-500"></span>
                                    </span>
                                </p>
                                <div className="w-[200px]">
                                    <button className="btn bg-white btn-xs mt-5 font-bold">Genre :</button>
                                    <button className="btn btn-outline btn-xs mt-5 font-bold text-white mx-1">Action</button>
                                    <button className="btn btn-outline btn-xs mt-5 font-bold text-white mx-1">Comedy</button>
                                    <button className="btn btn-outline btn-xs mt-5 font-bold text-white mx-1">1hr 50min</button>
                                    .<button className="btn bg-red-500 btn-xs mt-5 font-bold text-white mx-1">2024</button>
                                </div>
                                <div>
                                    <button className="btn btn-outline btn-sm mt-5 font-bold text-white mx-1"><LiaImdb className="text-3xl" />8.0</button>
                                    <button className="btn btn-outline btn-sm mt-5 font-bold text-white mx-1"><GiTomato className="text-3xl" />80%</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-full">
                <img
                    src="https://i.ibb.co/283HP0h/deadpool-wolverine-mobile-640x480-ad8020fd.jpg"
                    className="w-full h-full object-cover"
                    alt="Slide 2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle btn-neutral">❮</a>
                    <a href="#slide3" className="btn btn-circle btn-neutral">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
