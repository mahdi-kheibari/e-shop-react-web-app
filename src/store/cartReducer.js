const cartReducer = (state, action) => {
    switch (action.type) {
        case "setItem":
            var newCartItems = [...state.cartItems]
            newCartItems.push(action.info)
            return { ...state, cartItems: newCartItems };
        case "deleteItem":
            var newCartItems = state.cartItems.filter(i => i.id !== action.info)
            return { ...state, cartItems: newCartItems };
        case "deleteAll":
            var newCartItems = []
            return { ...state, cartItems: newCartItems };
        case "changeCount":
            var newCartItems = state.cartItems.map((item) => {
                if (item.id === action.info.id) {
                    return {
                        ...item,
                        count: action.info.value
                    }
                } else {
                    return {
                        ...item
                    }
                };
            })
            return { ...state, cartItems: newCartItems };
        case "changeSingleTotal":
            var newCartItems = state.cartItems.map((item) => {
                if (item.id === action.info) {
                    return {
                        ...item,
                        total: item.priceNumber * item.count
                    }
                } else {
                    return {
                        ...item
                    }
                };
            })
            return { ...state, cartItems: newCartItems };
        case "changeSumTotal":
            var newSumTotal = state.sumTotal
            if (state.cartItems.length > 0) {
                var sum = 0
                state.cartItems.forEach(i => {
                    sum += i.total
                });
                newSumTotal = sum
            } else {
                newSumTotal = 0
            }
            return { ...state, sumTotal: newSumTotal };
        case "updateAfterRefresh":
            var newCartItems = action.info.cartJSON ? JSON.parse(action.info.cartJSON) : []
            return { ...state, cartItems: newCartItems };
        default:
            return state;
    }
};
export default cartReducer;