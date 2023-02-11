import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchValue:'',
    },
    reducers: {
        changeSearchValue(state, action) {
            state.searchValue=action.payload.info
        },
        removeSearchValue(state, action) {
            state.searchValue=""
        },
    },
})

// Action creators are generated for each case reducer function
export const { changeSearchValue, removeSearchValue } = searchSlice.actions

export default searchSlice.reducer