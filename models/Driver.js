import mongoose from 'mongoose';

const { Schema } = mongoose;

const pointsByYearSchema = new Schema({
  year: Number,
  points: Number,
  teamName: String
}, { _id: false });

const DriverSchema = new Schema({
  name: String,
  nationality: String,
  team: String,
  officialNumber: Number,
  podiums: Number,
  pointsByYear: [pointsByYearSchema],
  image: String
});

export default mongoose.model('drivers', DriverSchema);
