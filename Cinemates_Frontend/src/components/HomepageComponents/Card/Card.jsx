import { LiaImdb } from "react-icons/lia";

const Card = () => {
    return (
        <div>
            <div className="card bg-base-100 w-56 mb-10">
                <figure className="">
                    <img
                        src="https://i.ibb.co/bWc7krr/MV5-BNz-Ri-Mjg0-Mz-Ut-NTQ1-Mi00-Y2-Q5-LWEw-M2-Mt-Mz-Uw-ZDU5-Nm-Vj-N2-Nk-Xk-Ey-Xk-Fqc-Gc-V1-FMjpg-UX1.jpg"
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="">
                    <h2 className="text-xl font-bold mt-3">Deadpool & Wolverine</h2>
                    <div className="w-[250px] flex ">
                        <button className="btn bg-red-500 btn-xs font-bold text-white">Celebrated :</button>
                        <button className="btn btn-outline btn-xs font-bold  mx-1">1 Year</button>
                        <button className="btn btn-outline btn-xs font-bold  mx-1"><LiaImdb className="text-2xl" />8.0</button>
                    </div>
                    <div>
                        <button className="btn bg-black btn-xs font-bold text-white">Genre :</button>
                        <button className="btn btn-outline btn-xs font-bold  mx-1">Action</button>
                        <button className="btn bg-red-500 btn-xs font-bold  mx-1">Comedy</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;