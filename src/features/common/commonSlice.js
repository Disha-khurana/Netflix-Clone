import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { requests } from "../../helper/apiRequests"
import axios from "../../helper/axios";

const initialState={
    headerDetails:{
        status:"idle",
        data:null,
        error:null
    },
    videoDetails:{
        status:"idle",
        data:null,
        error:null
    },
    searchParams:{
        platform:"",
        query:""
    }
}

export const fetchHeaderDetails = createAsyncThunk(
    'common/fetchHeaderDetails',
    async(param) =>{
        const response = await axios.get(requests.getVideoDetails(param.type,param.id))
        return response.data;
    }
)
export const fetchVideoDetails = createAsyncThunk(
    'common/fetchVideoDeatils',
    async(param) =>{
        const response = await axios.get(requests.getVideoDetails(param.type,param.id))
        return response.data;
    }
)

export const commonSlice = createSlice({
    name: "common",                          //to differentiate slice(backend)
    initialState,
    reducers:{
        searchQuery: (state,action)=>{
            state.searchParams = action.payload;
        }
    },
    extraReducers: (builder) => { 
        builder
        .addCase(fetchHeaderDetails.pending,(state,action)=>{
            state.headerDetails.status="loading";
        })
        .addCase(fetchHeaderDetails.fulfilled,(state,action)=>{
            state.headerDetails.status="success";
            state.headerDetails.data = action.payload;
        })
        .addCase(fetchHeaderDetails.rejected,(state,action)=>{
            state.headerDetails.status = "failed";
            state.headerDetails.error = action.error;
        })
        .addCase(fetchVideoDetails.pending,(state,action)=>{
            state.videoDetails.status="loading";
        })
        .addCase(fetchVideoDetails.fulfilled,(state,action)=>{
            state.videoDetails.status="success";
            state.videoDetails.data = action.payload;
        })
        .addCase(fetchVideoDetails.rejected,(state,action)=>{
            state.videoDetails.status = "failed";
            state.videoDetails.error = action.error;
        })
    }
})

export const {searchQuery} = commonSlice.actions;

export const selectSearchParams = (state)=>state.common.searchParams;
export const selectHeaderDetails = (state)=> state.common.headerDetails;           //state.storeobj.initialstatedata
export const selectVideoDetails = (state)=> state.common.videoDetails; 

export default commonSlice.reducer;