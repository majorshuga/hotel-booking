const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    room:{
        type: String,
        required:true
    },
    roomid:{
        type: String,
        required: true
    },
    userid:{
        type: String,
        required: true
    },
    fromdate:{
        type: String,
        required: true
    },
    todate:{
        type: String,
        required: true
    },
    totaldays:{
        type: Number,
        required: true
    },
    totalamount:{
        type: Number,
        required: true
    },
    transactionid:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true,
        default: "booked"
    }


},{
    timestamps : true,
})

const bookingmodal = mongoose.model('bookings',bookingSchema)

module.exports = bookingmodal