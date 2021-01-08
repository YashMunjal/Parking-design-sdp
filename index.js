const express=require('express');



class Vehicle {

    constructor(number, inTime,outTime,model,spaceEntry) {
        this._id=
        this.number=number;
        this.inTime=inTime;
        this.outTime=outTime;
        this.model=model;
        this.spaceEntry=spaceEntry;
    }
}
const Audi=new Vehicle(8305,'12:00','13:00','swift vdi',"4");
console.log(Audi);


const app = express();

const port=process.env.PORT || 3000;

app.get('/', (req, res) =>{
    res.send("Welcome to Parking System");
})


app.listen(port,() => {
    console.log(`listening at ${port}`);
})