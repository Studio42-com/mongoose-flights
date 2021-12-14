var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const destinationsSchema = new Schema({
    content: String,
 
  }, {
    timestamps: true
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

     
});


module.exports = mongoose.model("Flight", flightSchema);