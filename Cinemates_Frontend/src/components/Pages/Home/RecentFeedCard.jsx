
import { BsHandThumbsUpFill, BsStarFill } from "react-icons/bs";
import PropTypes from 'prop-types';
const RecentFeedCard = ({
    imageUrl,
    title,
    username,
    avatarUrl,
    rating,
    likes,
    description
}) => {
    return (
        <div className="card card-side bg-base-100 ">
            <figure>
                <img
                    className='w-[190px] h-[150px] rounded-lg'
                    src={imageUrl}
                    alt={title}
                />
            </figure>
            <div className="card-body">
                <h2 className="text-lg font-semibold">{title}</h2>
                <div>
                    <div className="flex items-center gap-2">
                        <div className="avatar flex justify-between">
                            <div className="w-5 rounded-full">
                                <img src={avatarUrl} alt={username} />
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-semibold">{username}</p>
                        </div>
                        <div>
                            <div className="card-actions  text-sm">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <BsStarFill
                                            key={i}
                                            className={i < rating ? "text-orange-500" : "text-gray-300"}
                                        />
                                    ))}
                                </div>
                                <div className="flex items-center text-sm">
                                    <BsHandThumbsUpFill />
                                    <span className="ml-1">{likes}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-xs">{description}</p>
            </div>
        </div>
    );
};

RecentFeedCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
};

export default RecentFeedCard;

