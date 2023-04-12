import mongoose from "mongoose";
const Schema = mongoose.Schema;

const pointsByYear = new Schema(
  {
    _id: {
      type: String
    },
    year: {
      type: Number,
      default: 2022,
    },
    points: {
      type: Number
    },
  },
  { _id: false }
);

let driverSchema = new Schema({
  name: { type: String },
  nationality: { type: String },
  team: { type: String },
  teamID: { type: Number },
  podiums: { type: Number },
  pointsByYear: [pointsByYear],
  image: { type: String },
});

driverSchema.virtual("teamName", {
  ref: "Team",
  localField: "team",
  foreignField: "_id",
  justOne: true,
});

export default mongoose.model("drivers", driverSchema);
