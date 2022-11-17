import { createSlice } from "@reduxjs/toolkit";

const initialState={
    current:0,
    bestScore:0,
}

const scoreSlice=createSlice({
    name:"score",
    initialState,
    reducers:{
        increase:(state,action)=>{
            state.current+=1;
            state.bestScore=state.current;
        },
        clear:(state,action)=>{
            state.bestScore=state.current;
            state.current=0;
        }

    }
})


export default scoreSlice.reducer;
export const {increase,clear}=scoreSlice.actions;