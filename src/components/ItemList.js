import { addItem } from "../redux/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemList = ({ data, isLast }) => {
  const dispatch = useDispatch();

  const notify = (data) => {
    toast(`${data.name} Added to your cart`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleCartItems = (data) => {
    dispatch(addItem(data));
    notify(data);
  };

  const {
    name,
    defaultPrice,
    price,
    description,
    imageId,
    itemAttribute,
    offerTags,
    variantsV2,
  } = data;
  const { rating, ratingCountV2 } = data?.ratings?.aggregatedRating;

  return (
    <div
      className={`flex justify-between mx-4 py-[45px] ${
        !isLast ? "border-b-2" : "border-b-0"
      }`}
    >
      <div className="w-[800px] flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          {itemAttribute && itemAttribute?.vegClassifier === "NONVEG" ? (
            <p>🟥</p>
          ) : (
            <p>🟩</p>
          )}
          <h2 className="text-[18px] leading-5 font-bold text-[#02060c] text-opacity-[75%]">
            {name}
          </h2>
          <p className="text-[16px] leading-[19px] text-[#02060c] text-opacity-[92%] font-medium ml-1">
            ₹ {(defaultPrice ?? price) / 100}{" "}
            {offerTags &&
              offerTags.some((obj) => Object.keys(obj).length > 0) && (
                <span className="text-[12px] leading-3 font-extrabold text-[#02060c] text-opacity-[60%]">
                  {offerTags.map((item, index) => (
                    <span key={index}>
                      🏷️
                      {item.title} {item.subTitle}
                    </span>
                  ))}
                </span>
              )}
          </p>
        </div>
        <p className="text-[13px] leading-4 font-bold">
          {rating ? (
            <>
              <span className="text-[#116649]">
                <span className="text-[#116649]">★</span> {rating}
              </span>{" "}
              ({ratingCountV2})
            </>
          ) : (
            ""
          )}
        </p>
        <div className="pr-[38px]">
          <p className="w-full text-[16px] leading-[19px] h-[38px] line-clamp-2 text-[#02060c] text-opacity-[60%]">
            {description}
          </p>
        </div>
      </div>
      <div className="relative flex flex-col items-center">
        <img
          className="w-[156px] h-[140px] rounded-xl object-cover"
          src={`${CDN_URL}${imageId}`}
          alt="Menu Item Image"
        />
        <div className="flex flex-col items-center absolute bottom-[-29px]">
          <button
            className="shadow-add-button w-[120px] py-[7px] text-[18px] leading-[24px] font-semibold text-center rounded-lg text-[#1ba672] outline outline-1 outline-[#D9D9DA] bg-white"
            onClick={() => handleCartItems(data)}
          >
            ADD
          </button>
          <ToastContainer />
          {variantsV2 && Object.keys(variantsV2).length > 0 ? (
            <p className="mt-[3px] text-[13px] leading-4 text-[#02060c] text-opacity-[45%]">
              Customisable
            </p>
          ) : (
            <p className="mt-[3px] text-[13px] leading-4 text-[#02060c] text-opacity-[45%]">
              Non Customisable
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
