const Carousel = () => {
    return (
        <div className="carousel w-full h-[520px] relative rounded-lg overflow-hidden">
            <div id="slide1" className="carousel-item relative w-full h-full">
                <img
                    src="https://i.ibb.co/283HP0h/deadpool-wolverine-mobile-640x480-ad8020fd.jpg"
                    className="w-full h-full object-cover"
                    alt="Slide 1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-[#00000028]"></div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle btn-neutral">❮</a>
                    <a href="#slide2" className="btn btn-circle btn-neutral">❯</a>
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
