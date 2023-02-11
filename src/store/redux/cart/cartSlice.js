import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        sumTotal: 0
    },
    reducers: {
        setItem(state, action) {
            state.cartItems.push(action.payload.info);
        },
        deleteItem(state, action) {
            const newCart = state.cartItems.filter(i => i.id !== action.payload.info);
            state.cartItems = newCart
        },
        deleteAll(state) {
            state.cartItems = [];
        },
        changeCount(state, action) {
            state.cartItems = state.cartItems.map((item) => {
                if (item.id === action.payload.info.id) {
                    return {
                        ...item,
                        count: action.payload.info.value
                    }
                } else {
                    return {
                        ...item
                    }
                };
            })
        },
        changeSingleTotal(state, action) {
            state.cartItems = state.cartItems.map((item) => {
                if (item.id === action.payload.info) {
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
        },
        changeSumTotal(state) {
            if (state.cartItems.length > 0) {
                let sum = 0
                state.cartItems.forEach(i => {
                    sum += i.total
                    state.sumTotal = sum
                });
            } else {
                state.sumTotal = 0
            }
        },
        updateAfterRefresh(state, action) {
            state.cartItems = action.payload.info.cartJSON ? JSON.parse(action.payload.info.cartJSON) : [];
        }
    },
})

// Action creators are generated for each case reducer function
export const { setItem, deleteItem, deleteAll, changeCount, changeSingleTotal, changeSumTotal, updateAfterRefresh } = cartSlice.actions

export default cartSlice.reducer