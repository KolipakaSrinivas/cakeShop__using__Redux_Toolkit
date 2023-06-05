const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numIcecream : 20
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers : {
        orderedIcecream : (state,actions) =>{
            state.numIcecream --
        },

        icecreamRestocked : (state) => {
            state.numIcecream += actions.payload
        }
    }
})

module.exports = icecreamSlice;
module.exports.icecreamAction = icecreamSlice.actions
