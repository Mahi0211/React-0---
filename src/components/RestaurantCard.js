import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  // Destructure only if resData and resData.info are defined
  const { name, cloudinaryImageId, cuisines, areaName, avgRating, sla } =
    resData?.info || {};

  // const { slaString } = resData?.info?.sla || {};

  return (
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId} alt="res-logo" />
      <h3>{name}</h3>
      <h4>{`${avgRating} . ${sla?.slaString}`}</h4>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{areaName}</h4>
    </div>
  );
};

export default RestaurantCard;
