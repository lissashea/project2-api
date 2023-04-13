import mongoose from 'mongoose';
import Driver from './Driver.js';

const { Schema } = mongoose;

const driverIdSchema = new Schema({
  driverNumber: {
    type: Number,
    required: true,
  },
  driver: {
    type: Schema.Types.Number,
    ref: "Driver",
  },
}, { _id: false });


const pointsByYearSchema = new Schema({ 
  year: {
    type: Number,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
  drivers: [
    {
      driverId: {
      type: Number,
      ref: "Driver",
      },
    },
  ],
}, { _id: false });

const TeamSchema = new Schema({
  teamName: {
    type: String,
    required: true,
  },
  teamID: {
    type: Number
  },
  previousNames: {
    type: [String],
    required: false,
  },
  principal: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  engine: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  championships: {
    type: Number,
    required: true,
  },
  teamLogo: {
    type: String,
    required: true,
  },
  pointsByYear: [pointsByYearSchema],
},
{ _id: false }
)

// TeamSchema.pre('findOne', function(next) {
//   this.populate({
//     path: 'pointsByYear.drivers.driverId',
//     select: 'driverNumber name nationality',
//     model: 'Driver',
//   });
//   next();
// });



export default mongoose.model('teams', TeamSchema);

