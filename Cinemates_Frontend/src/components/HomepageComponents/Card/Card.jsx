import PropTypes from 'prop-types';
import { LiaImdb } from "react-icons/lia";

const Card = ({ title, poster, imdbRating, age, genres }) => {
    return (
        <div>
            <div className="card bg-base-100 w-56 mb-10">
                <figure className="">
                    <img
                        src={poster}
                        alt={title}
                        className="rounded-xl"
                    />
                </figure>
                <div className="">
                    <h2 className="text-xl font-bold mt-3">{title}</h2>
                    <div className="w-[250px] flex ">
                        <button className="btn bg-red-500 btn-xs font-bold text-white">Celebrated :</button>
                        <button className="btn btn-outline btn-xs font-bold  mx-1">{age} Years</button>
                        <button className="btn btn-outline btn-xs font-bold  mx-1"><LiaImdb className="text-2xl" />{imdbRating}</button>
                    </div>
                    <div>
                        <button className="btn bg-black btn-xs font-bold text-white">Genre :</button>
                        {genres.split(', ').map((genre, index) => (
                            <button key={index} className="btn btn-outline btn-xs font-bold mx-1">{genre}</button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// PropTypes validation
Card.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    imdbRating: PropTypes.number.isRequired,
    age: PropTypes.number.isRequired,
    genres: PropTypes.string.isRequired,
};

export default Card;
