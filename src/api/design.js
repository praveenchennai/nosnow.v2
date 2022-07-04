import { createSlice } from '@reduxjs/toolkit';


export const designDB = createSlice({
    name: 'design',
    initialState: {
        xsSize: false,
        smSize: false,
        mdSize: false,
        lgSize: false,
        xlSize: false
    },
    reducers: {
        setSize: (state, action) => {
            return{
                ...state,
                ...action.payload
            }
        },
    }
})

export const { setSize } = designDB.actions

export default designDB.reducer