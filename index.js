const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
 
// A Client to MongoDB
mongoose.connect('mongodb://localhost:27017/parking-db', {useNewUrlParser: true,useUnifiedTopology: true},()=>{
    console.log('Mongo connected');
});
 


const app = express();




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

require('./routes-and-calcs/calculations')(app);



const port=process.env.PORT || 3000;


app.listen(port,() => {
    console.log(`listening at ${port}`);
})