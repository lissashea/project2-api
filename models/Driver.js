import mongoose from "mongoose";

const pointsByYear = new mongoose.Schema({
  _id: { 
    type: String 
  },
  year: {
    type: Number,
    required: false,
    default: 2022
  },
  points: {
    type: Number,
    required: false
  }
}, { _id: false });

const driverSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  nationality: {
    type: String,
    required: false
  },
  team: {
    type: String,
    required: false,
  },
  teamID: {
    type: Number,
    ref: 'Team',
    required: false
  },
  podiums: {
    type: Number,
    required: false
  },
  pointsByYear: [pointsByYear],
  image: {
    type: String,
    required: false
  }
});

const Driver = mongoose.model('Driver', driverSchema);
export default Driver;
