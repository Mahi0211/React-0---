import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import CartItem from "./Counter";
import { clearCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const Checkout = (props) => {
  const { cartItems, resBasicData } = props;

  console.log("cartItems:", cartItems); // Debug cartItems
  console.log("resBasicData:", resBasicData); // Debug resBasicData

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-[20px] leading-[24px] mb-[5px]">Your cart is empty</h1>
        <p>You can go to the home page to view more restaurants</p>
        <Link to="/">
          <button className="px-2 py-1 text-white bg-gray-500 rounded-sm mt-[20px]">SEE RESTAURANTS NEAR YOU</button>
        </Link>
      </div>
    );
  }

  if (!resBasicData) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-[20px] leading-[24px] mb-[5px]">Loading restaurant details...</h1>
        <p>Please wait while we fetch the details of your selected restaurant.</p>
      </div>
    );
  }

  const { name, areaName, cloudinaryImageId } = resBasicData;

  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className="w-[366px] mx-auto mt-[30px] bg-white">
      <div className="flex items-center justify-between pr-[30px]">
        <div className="flex flex-row items-start px-[30px] py-[20px]"> {/* ResData */}
          <div>
            <img src={CDN_URL + cloudinaryImageId} alt={name} className="h-[50px] w-[50px]" />
          </div>
          <div className="flex flex-col mx-[14px]">
            <div>
              <h1 className="text-[17px] leading-[20.4px] font-bold">{name}</h1>
              <p className="text-[13px] leading-[15.6px]">{areaName}</p>
            </div>
            <hr className="w-1/2 border-[#282c3f] mt-[14px]" />
          </div>
        </div>
        <div>
          <button onClick={handleCart}>🗑</button>
        </div>
      </div>
      <div className="mx-[30px]">
        {cartItems.map((cartItem) => {
          return (
            <div key={cartItem.id} className="flex items-center justify-between py-[10px]">
              <div className="flex items-center">
                <div>
                  {cartItem?.itemAttribute?.vegClassifier === "VEG" ? (
                    <span className="pr-1">🟩</span>
                  ) : (
                    <span className="pr-1">🟥</span>
                  )}
                </div>

                <div>
                  <h1 className="text-[14px] leading-[16.8px] font-semibold text-[#282c3f]">{cartItem.name}</h1>
                </div>
              </div>
              <CartItem cartItem={cartItem} />
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Checkout;
