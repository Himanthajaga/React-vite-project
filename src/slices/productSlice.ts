import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type {RootState} from "../store/store.ts";

interface ProductState {
    list: [],
    error: string | null | undefined

}

//type ekai object ekak asiign kara
const initialState: ProductState = {
    list:[],
    error: null,

}

export const getAllProducts = createAsyncThunk(
    'product/getAllProducts',
    async () => {
        const response = await fetch('./product-data.json');
        return await response.json();

    }
)

//producr ekata related dewal maintain karana nisa
//udin define karapu init
const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers:{},
    extraReducers:(builder) => {
//Async Response pending
        builder.addCase(getAllProducts.pending, () => {
            alert("Product data is still loading...");

// Async Response Complete State
        }) .addCase(getAllProducts.fulfilled, (state:RootState, action) => {
            state.list = action.payload;
// Async Response Failure State
        }) .addCase(getAllProducts.rejected, (state:RootState, action) => {
            state.error = (action.payload as Error)?.message || 'Failed to fetch products';
            alert("Failed to fetch products: " + state.error);
        })
    }
});

export default productSlice.reducer;