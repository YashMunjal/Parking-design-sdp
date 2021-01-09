const mongoose=require('mongoose');

const ticketSchema = new mongoose.Schema({
        number={type: String},
        inTime={type: String},
        outTime={type: String},
        model={type: String},
        spaceEntry={type: String},
        
})