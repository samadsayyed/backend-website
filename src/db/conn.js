const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/youtubeRegisteration").then(()=>{
    console.log(`connection successful`)
}).catch(()=>{
    console.log(`connection is engineer`)
})
