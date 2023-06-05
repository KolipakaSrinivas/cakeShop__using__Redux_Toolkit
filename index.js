const store = require('./app/store')



const unsubscribe = store.subscribe(()=>{
    console.log("upDataState", store.getState())
})
console.log(store.getState())

unsubscribe()
