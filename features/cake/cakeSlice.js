const  createSlice = require('@reduxjs/toolkit').createSlice



const initialState = {
    numCakes : 10 
}


const cakeSlice = createSlice({
    'name':'cake',
    initialState,
    reducers: {
        orderedCake: (state) => {
            state.numCakes--
        },

        cakeRestocked : (state,action) => {
            state.numCakes += action.payload
        }
        
    }
})

module.exports = cakeSlice;
module.exports.Actions = cakeSlice.actions


