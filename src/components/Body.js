import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

export const Body = () => {
  return (
    <div className="body">
      <h1>Top restaurant</h1>
      <div className="button">
        <button className="res-btn" onClick={() = {
          resList = resList.filter((data) => data.avgRating > 4)
        }}>Top Restaurants</button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
