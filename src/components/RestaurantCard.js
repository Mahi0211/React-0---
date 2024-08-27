import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  // Destructure only if resData and resData.info are defined
  const { name, cloudinaryImageId, cuisines, areaName, avgRating } =
    resData?.info || {};

  const { slaString } = resData?.info?.sla || {};

  return (
    <div className="res-card" style={{ width: "273px", height: "283px" }}>
      <img
        style={{
          width: "273px",
          height: "170px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 style={{ margin: "5px" }}>{name}</h3>
      <h4 style={{ margin: "5px" }}>{`${avgRating} . ${slaString}`}</h4>
      <h4 style={{ margin: "5px" }}>{cuisines?.join(", ")}</h4>
      <h4 style={{ margin: "5px" }}>{areaName}</h4>
    </div>
  );
};

export default RestaurantCard;
