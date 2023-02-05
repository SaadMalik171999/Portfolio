import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./features";
export default configureStore({
    reducer:{
        themes: themeSlice.reducer,
    },
})
