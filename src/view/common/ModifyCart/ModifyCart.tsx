import type {CartItem} from "../../../model/CartItem.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import {decreaseQuantity, increaseQuantity} from "../../../slices/cartSlice.ts";

interface ModifyCartProps {
    data: CartItem
}

// export const itemsList:CartItem[] = [];
export function ModifyCart({ data }: ModifyCartProps) {
    const dispatch = useDispatch<AppDispatch>();
    // const [itemCount, setItemCount]
    //     = useState(1);
    const item = useSelector((state: RootState) => state.cart.items)
        .find(cartItem => cartItem.product.id === data.product.id)

    const decreaseItemCount = () => {
        if (item && item.itemCount > 1){
            // setItemCount((prev) => prev -1)
            dispatch(decreaseQuantity(data.product.id));
        }else {
            alert("Item count can't be less than 1");
        }
    }
    const increaseItemCount = () => {
        // setItemCount((prev) => prev + 1);
        dispatch(increaseQuantity(data.product.id));

    }

    return (
        <div className="w-full mt-4 p-[2.4px]
                        text-[8px] text-center">
            <button className="float-left
                 text-[8px] bg-yellow-300
                 rounded-lg h-5 w-5"
                    onClick={decreaseItemCount}>-</button>
            <small
                className="text-[8px]">{item?.itemCount}</small>
            <button className="float-right
                 text-[8px] bg-yellow-300
                 rounded-lg h-5 w-5"
                    onClick={increaseItemCount}>+</button>
        </div>
    );
}