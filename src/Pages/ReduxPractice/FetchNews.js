import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchNews = () => async(dispatch) =>{
    const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=598ff10007294bd486810f94fbc068a9");
    dispatch(fulfilled(response.data.articles))
    return response.data.articles;

}



const dataSlice = createSlice({
    name: 'blogFetch',
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    reducers: {
        pending:(state)=>{state.isLoading = true;},
        fulfilled:  (state,action)=>{
            state.data = action.payload;
            state.isLoading = false;
        },
        rejected: (state, action)=>{
            state.error = action.error;
            state.isLoading = false;
        }
    },
    // extraReducers: {
    //     [FetchNews.pending]: state => {
    //         state.isLoading = true;
    //       },
    //       [FetchNews.fulfilled]: (state, action) => {
    //         state.data = action.payload;
    //         state.isLoading = false;
    //       },
    //       [FetchNews.rejected]: (state, action) => {
    //         state.error = action.error;
    //         state.isLoading = false;
    //       }
    // }
});

export const {pending, fulfilled, rejected} = dataSlice.actions
export default dataSlice.reducer;