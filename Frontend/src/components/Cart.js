import { useSelector } from "react-redux";
import Checkout from "./Checkout";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const selectedRestaurant = useSelector((state) => state.restaurant.selectedRestaurant);

  return (
    <div className="h-screen">
      <Checkout cartItems={cartItems} resBasicData={selectedRestaurant} />
    </div>
  );
};

export default Cart;
