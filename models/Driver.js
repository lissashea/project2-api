import mongoose, { model } from "mongoose";
const Schema = mongoose.Schema;

const pointsByYear = new Schema({
  _id: { 
    type: Schema.Types.ObjectId,
    ref: "Team"
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

let driverSchema = new Schema({
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

driverSchema.virtual('teamName', {
  ref: 'Team',
  localField: 'team',
  foreignField: '_id',
  justOne: true,
});

export default mongoose.model("drivers", driverSchema)
