const express=require('express');
const mongoose=require('mongoose');
var mogoUrl = "mongodb://localhost:27017";
 
// A Client to MongoDB
mongoose.connect('mongodb://localhost:27017/parking-db', {useNewUrlParser: true,useUnifiedTopology: true},()=>{
    console.log('Mongo connected');
});
 


const app = express();

const port=process.env.PORT || 3000;

app.get('/', (req, res) =>{
    res.send("Welcome to Parking System");
})


app.listen(port,() => {
    console.log(`listening at ${port}`);
})