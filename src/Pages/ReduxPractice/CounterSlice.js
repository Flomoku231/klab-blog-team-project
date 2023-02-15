
import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const FetchData = createAsyncThunk('data/FetchData', async()=>{
    const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=598ff10007294bd486810f94fbc068a9");
} )

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers:{
        Increment :state=>{
            state.value += 1;
        },
        Decrement : state=>{
            state.value -= 1;
        }
    }
});

export const {Increment, Decrement} = counterSlice.actions;

export default counterSlice.reducer;