import { useState, useEffect } from "react";

const useInfiniteScroll = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Initial data fetch
    fetchRestaurants();
  }, []);

  useEffect(() => {
    // Event listener for scrolling
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        fetchRestaurants(); // Fetch more restaurants when nearing the bottom
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fetchRestaurants = async () => {
    setLoading(true);
    const requestData = {
      location: {
        latitude: 12.9715987,
        longitude: 77.5945627,
      },
      sortBy: "RELEVANCE",
      filter: {
        vegOnly: false,
      },
    };

    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/update",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const newRestaurants =
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setRestaurants((prevRestaurants) => [
        ...prevRestaurants,
        ...newRestaurants,
      ]);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  return restaurants;
};

export default useInfiniteScroll;

// Function to make POST request (e.g., on some event)
// const updateRestaurantList = async () => {
//     const requestData = {
//       location: {
//         latitude: 12.9715987,
//         longitude: 77.5945627,
//       },
//       sortBy: "RELEVANCE",
//       filter: {
//         vegOnly: false,
//       },
//     };

//     try {
//       const response = await fetch(
//         "https://www.swiggy.com/dapi/restaurants/list/update",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(requestData),
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log("Success:", data);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };
