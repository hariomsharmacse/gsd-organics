import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const Cart = () => {
  const { products, currency, carItems } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in carItems) {
      for (const item in carItems[item]) {
        if (carItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: carItems[items][item],
          });
        }
      }
    }
    console.log(tempData);
  }, [carItems]);

  return <div>Cart</div>;
};

export default Cart;
