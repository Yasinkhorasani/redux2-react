import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import { useReducer } from "./src/featurs/userSlice";

export default configureStore({
    reducer:{
        use:useReducer,
    }
});