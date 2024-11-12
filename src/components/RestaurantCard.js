// RestaurantCard
import { CDN_URL } from "../utils/constant";
const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;
    const { deliveryTime } = resData?.info.sla;

    return (
        <div className="m-4 p-4 w-[250px] h-[340px] rounded-lg bg-gray-50 hover:bg-gray-200 shadow-lg flex flex-col justify-between">
            <img className="rounded-lg w-full h-[150px] object-cover" src={CDN_URL + cloudinaryImageId} alt={name} />
            <div className="flex-grow">
                <h3 className="font-bold py-2 text-lg">{name}</h3>
                <h4 className="truncate text-gray-700">{cuisines.join(", ")}</h4>
            </div>
            <div className="pt-2 text-gray-600">
                <h4>{avgRating} stars</h4>
                <h4>{deliveryTime} mins</h4>
            </div>
        </div>
    );
}

export default RestaurantCard;