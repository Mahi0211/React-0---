import { useState } from "react";

const Counter = ({ count, setCount }) => {

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count > 0 ? count - 1 : 0);

    return (
        <div className="flex items-center border border-gray-300 rounded">
            <button
                onClick={decrement}
                className="px-[9px] py-[3px] text-gray-500 hover:text-gray-700 text-[21px] leading-[30px]"
            >
                -
            </button>
            <span className="px-[9px] py-[3px] font-bold text-green-500 text-[12px] leading-[30px]">{count}</span>
            <button
                onClick={increment}
                className="px-[9px] py-[3px] text-green-500 hover:text-green-700 text-[18px] leading-[30px]"
            >
                +
            </button>
        </div>
    );
};

const CartItem = ({ cartItem }) => {
    const [count, setCount] = useState(1); // Initialize count to 1

    const price =
        ((cartItem.defaultPrice / 100) || (cartItem.price / 100)) * count;

    return (
        <div className="flex items-center">
            <Counter count={count} setCount={setCount} />
            <div className="pl-6">
                <p className="text-[13px] leading-[15.6px] text-[#535665]">
                    ₹{price.toFixed(0)}
                </p>
            </div>
        </div>
    );
};

export default CartItem;
