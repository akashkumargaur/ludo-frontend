import {configureStore} from "@reduxjs/toolkit" 
import { challengeReducer } from "./reducers/challengeReducer";
import {profileReducer, userReducer} from "./reducers/userProvider"


const store= configureStore({
    reducer:{
        user:userReducer,
        profile:profileReducer,
        challenge:challengeReducer,
    },

});

export default store;

// export  const server='https://coursehub-j8huwirc3-akashkumargaur.vercel.app/app/v1'
export  const server='/app/v1'