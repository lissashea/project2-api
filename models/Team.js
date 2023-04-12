import mongoose from "mongoose";
const Schema = mongoose.Schema;

const pointsByYear = new Schema(
  {
    year: {
      type: Number,
      required: false,
      default: 2022,
    },
    points: {
      type: Number
    },
    drivers: {
      type: [String]
    }
  },
  { _id: false }
);

const Team = new Schema({
  teamName: { type: String },
  // teamID: { type: Number },
  // previousNames: [{ type: String }],
  principal: { type: String },
  owner: { type: String },
  engine: { type: String },
  country: { type: String },
  championships: { type: Number },
  teamLogo: { type: String },
  pointsByYear: [pointsByYear]
});

export default mongoose.model("teams", Team);
