
import { BsHandThumbsUpFill, BsStarFill } from "react-icons/bs";
const RecentFeedCard = () => {
    return (
        <div className="card card-side bg-base-100  ">
            <figure>
                <img
                    className='w-[190px] h-[150px] rounded-lg'
                    src="https://i.ibb.co/bWc7krr/MV5-BNz-Ri-Mjg0-Mz-Ut-NTQ1-Mi00-Y2-Q5-LWEw-M2-Mt-Mz-Uw-ZDU5-Nm-Vj-N2-Nk-Xk-Ey-Xk-Fqc-Gc-V1-FMjpg-UX1.jpg"
                    alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="text-lg font-semibold">Deadpool & Wolverine</h2>
                <div className="flex items-center gap-2">
                    <div className="avatar flex justify-between">
                        <div className="w-5 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />

                        </div>
                    </div>
                    <p className="text-sm font-semibold"> Sajid</p>
                </div>
                <p className="text-xs">Deadpool is offered a place in the Marvel Cinematic Universe by the Time Variance Authority.</p>
                <div className="card-actions  text-sm">
                    <div className="flex">
                        <BsStarFill className="text-orange-500" />
                        <BsStarFill className="text-orange-500" />
                        <BsStarFill className="text-orange-500" />
                        <BsStarFill className="text-orange-500" />
                        <BsStarFill className="text-orange-500" />
                    </div>
                    <div className="flex items-center  text-sm">
                        <BsHandThumbsUpFill />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentFeedCard;