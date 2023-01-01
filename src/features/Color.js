import { createSlice } from "@reduxjs/toolkit";


export const colorSlice = createSlice({
    name:"theme",
    initialState:{value:""},
    reducers:{
        changeTheme:(state,action)=>{
            state.value = action.payload
        }
    }
})

export const {changeTheme}  = colorSlice.actions;
export default colorSlice.reducer;