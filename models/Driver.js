import mongoose from 'mongoose';
import Team from './Team.js';

const Schema = mongoose.Schema;

const pointsByYearSchema = new Schema({
  year: Number,
  points: Number,
  teamName: String
}, { _id: false });

const DriverSchema = new Schema({
  name: String,
  nationality: String,
  team: {
    type: Schema.Types.ObjectId,
    ref: 'Team'
  },
  officialNumber: Number,
  podiums: Number,
  pointsByYear: [pointsByYearSchema],
  image: String
});

const Driver = mongoose.model('drivers', DriverSchema);
export default Driver;
