

import { createSlice } from "@reduxjs/toolkit"

// initial value

const initialState = {                         //const init
    netflixOriginals: {

    }
}

// optional-actions or async actions

// createSlice method

export const tvSlice = createSlice({                     // initialState:init
    initialState,
    name: "tv",
    reducers: {},
    extraReducers: (builder) =>{ }
})
// action export

// optional - selectors export

// export slice
export default tvSlice.reducer