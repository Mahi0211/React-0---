import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

let resLi = [
  {
    info: {
      avgRating: 4.3,
    },
  },
  {
    info: {
      avgRating: 4.2,
    },
  },
  {
    info: {
      avgRating: 3,
    },
  },
  {
    info: {
      avgRating: 3.4,
    },
  },
]

export const Body = () => {
  return (
    <div className="body">
      <h1>Top restaurant</h1>
      <div className="button">
        <button
          className="res-btn"
          onClick={() => {
            resLi = resLi.filter((res) => res.info.avgRating > 4);
            console.log(resLi);
          }}
        >
          Top Restaurants
        </button>
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
