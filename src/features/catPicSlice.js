import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//
//https://course-api.com/react-useReducer-cart-project
const url = "https://api.thecatapi.com/v1/images/search?limit=12"
const headers = { 'x-api-key': "DEMO-API-KEY" }

export const getPictures = createAsyncThunk("get_pictures", async () => {
    try {
        let arr = []
        const resp = await fetch(url, { headers });
        const data = await resp.json();

        for (const key in data) {
            arr.push(data[key].url)
        }

        return arr.map((item, index) => {
            return { id: index, url: item, isClicked: false }
        })

    } catch (err) {
        return console.log(err);
    }

})

const initialState = {
    picArray: [],
    status: "idle",
    error: null,


}

const catPicSlice = createSlice({
    name: "catPic",
    initialState,
    extraReducers: {
        [getPictures.pending]: (state) => {
            state.status = "loading";
        },
        [getPictures.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.picArray = action.payload;

        },
        [getPictures.rejected]: (state, action) => {
            state.error = action.error.message;
            state.status = "failed"
        }
    },
    reducers: {
        Shuffle: (state, action) => {

            let arr = action.payload

            state.picArray = [...arr].sort(() => Math.random() - 0.5)

        },
        toggle:(state,action)=>{
            
            const ind=state.picArray.findIndex(obj=>obj.id===action.payload.id)
            state.picArray[ind].isClicked=true;
        },
        reset:(state,action)=>{
            state.picArray.map(item=>{return item.isClicked=false})
        }

    }
})

export default catPicSlice.reducer;
export const { Shuffle,toggle,reset } = catPicSlice.actions;