const mongoose=require('mongoose');

const ticketSchema = new mongoose.Schema({
        number:{type: String},
        inTime:{type: Date},
        outTime:{type: Date},
        model:{type: String},
        spaceEntry:{type: String},
        parkingId:{type: mongoose.Schema.Types.ObjectId,ref:'parkingLot'},

})


module.exports =mongoose.model('Ticket',ticketSchema);