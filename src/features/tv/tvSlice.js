

import { createAsyncThunk , createSlice } from "@reduxjs/toolkit"
import axios from '../../helper/axios';
import { endpoints, platformType, requests } from "../../helper/apiRequests";

// initial value

const initialState = {                         //const init
    netflixOriginals: {
        status: "idle",
        data: null,
        error: null

    },
    airingToday: {
        status:"idle",
        data:null,
        error:null
    },
    onTheAir: {
        status:"idle",
        data:null,
        error:null
    }
}

// optional-actions or async actions
export const fetchNetflixOriginals = createAsyncThunk(
    'tv/fetchNetflixOriginals',
    async () => {
        const response = await axios.get(requests.getDataByNetwork(213));
        return response.data;
    }
)

export const fetchAiringToday = createAsyncThunk(
    'tv/fetchAiringToday',
    async()=>{
        const response = await axios.get(requests.getCollections(platformType.tv,endpoints.airingToday))
        return response.data
    }
)

export const fetchOnTheAir = createAsyncThunk(
    'tv/fetchOnTheAir',
    async()=>{
        const response = await axios.get(requests.getCollections(platformType.tv,endpoints.airingToday))
        return response.data
    }
)

// createSlice method

export const tvSlice = createSlice({                     // initialState:init
    initialState,
    name: "tv",
    reducers: {},
    extraReducers: (builder) =>{
        builder
        .addCase(fetchNetflixOriginals.pending, (state) => { 
            state.netflixOriginals.status = "loading";
        })
        .addCase(fetchNetflixOriginals.fulfilled, (state,action) => { 
            state.netflixOriginals.status = "success";
            state.netflixOriginals.data = action.payload;
        })
        .addCase(fetchNetflixOriginals.rejected, (state,action) => {
            state.netflixOriginals.status = "failed";
            state.netflixOriginals.error = action.error;
         })
        .addCase(fetchAiringToday.pending, (state) => { 
            state.airingToday.status = "loading";
        })
        .addCase(fetchAiringToday.fulfilled, (state,action) => { 
            state.airingToday.status = "success";
            state.airingToday.data = action.payload;
        })
        .addCase(fetchAiringToday.rejected, (state,action) => {
            state.airingToday.status = "failed";
            state.airingToday.error = action.error;
         })
         .addCase(fetchOnTheAir.pending, (state) => { 
            state.onTheAir.status = "loading";
        })
        .addCase(fetchOnTheAir.fulfilled, (state,action) => { 
            state.onTheAir.status = "success";
            state.onTheAir.data = action.payload;
        })
        .addCase(fetchOnTheAir.rejected, (state,action) => {
            state.onTheAir.status = "failed";
            state.onTheAir.error = action.error;
         })
     }
})
// action export

// optional - selectors export

export const selectNetflixOriginals = (state) => state.tv.netflixOriginals;
export const selectAiringToday = (state)=> state.tv.airingToday;
export const selectOnTheAir = (state)=> state.tv.onTheAir;

// export slice
export default tvSlice.reducer