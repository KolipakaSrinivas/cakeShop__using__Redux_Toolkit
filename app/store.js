const cakeReducer = require("../features/cake/cakeSlice")
const icecreamReducer = require("../features/icecream/icecreamSlice")

const configureStore =  require("@reduxjs/toolkit").configureStore

const store = configureStore({
    reducer: {
        cake : cakeReducer,
        icecream : icecreamReducer
    }
})

module.exports = store