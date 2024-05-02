

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import usersReducer from "./features/users/userSlice";
import numberReducer from "./features/number/numberSlice";


const store = configureStore({
    reducer: {
        counter: counterReducer,
        number: numberReducer,
        users: usersReducer
    },
})
export default store 