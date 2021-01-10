const Ticket=require('../models/ticket');


module.exports=function(app){

    app.get('/', (req, res) =>{
        res.send("Welcome to Parking System");
    })
    app.post('/fill-ticket', (req, res) =>{
            req.body.number=Ticket.number
    })

}