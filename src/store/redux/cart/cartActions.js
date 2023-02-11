import { deleteAll, deleteItem, setItem } from "./cartSlice";

const actions = {
    addItem: (cartItems, info) => (dispatch) => {
        if (cartItems.some(i => i.id === info.product.id) === false || cartItems.length <= 0) {
            const priceArr = info.product.price.split(",");
            let newPrice = "";
            for (let i in priceArr) {
                newPrice += priceArr[i];
            }
            newPrice = parseInt(newPrice);
            const total = newPrice * parseInt(info.count);
            info.product["priceNumber"] = newPrice
            info.product["count"] = info.count
            info.product["total"] = total
            dispatch(setItem({ info: info.product }));
            return true;
        } else {
            return false;
        };
    },
    deleteItem: (info) => (dispatch) => {
        dispatch(deleteItem({ info: info.productId }));
    },
    deleteAll: () => (dispatch) => {
        dispatch(deleteAll());
    },
    saveCart: (cartItems) => (dispatch) => {
        localStorage.setItem("shoppingCart", JSON.stringify(cartItems));
    }
}
export default actions