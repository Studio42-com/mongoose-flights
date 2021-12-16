const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat: {type: String},
    price: {
        type: String,
        enum: ['160', '140', '120', '85']
    },  
 //   timestamps: true,
  });
const flightSchema = new Schema ({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        default: function(err) {
            if ((flightNo < 0 )|| (flightNo > 9999)){
                return false;
            }
        }
    },
    departs: {
        type: String,       
        default: function() {
            return new Date().toLocaleDateString; 
        }
    }, 
    //The cityline adds the city array for populating with destination
    city: [{type: Schema.Types.ObjectId, ref: 'Destination'}],
    tickets: [ticketSchema]
     
});


module.exports = mongoose.model("Flight", flightSchema);