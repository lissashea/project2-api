import mongoose from 'mongoose';

const { Schema } = mongoose;

const driverIdSchema = new Schema({
  driver1: { type: String },
  driver2: { type: String }
}, { _id: false });

const pointsByYearSchema = new Schema({ 
  year: { type: Number },
  points: { type: Number },
  drivers: [driverIdSchema]
}, { _id: false });

const TeamSchema = new Schema({
  teamName: { type: String, required: true },
  teamID: { type: Number },
  previousNames: { type: [String], required: false },
  principal: { type: String, required: true },
  owner: { type: String, required: true },
  engine: { type: String, required: true },
  country: { type: String, required: true },
  championships: { type: Number, required: true },
  teamLogo: { type: String, required: true },
  pointsByYear: [pointsByYearSchema]
}, { _id: false });

export default mongoose.model('teams', TeamSchema);
