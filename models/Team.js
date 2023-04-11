import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Team = new Schema({
  teamName: { type: String },
  teamID: { type: Number },
  previousNames: [{ type: String }],
  principal: { type: String },
  owner: { type: String },
  engine: { type: String },
  country: { type: String },
  championships: { type: Number },
  teamLogo: { type: String },
  pointsByYear: { type: Object },
  seasons: [
    {
      year: {
        type: Number,
        required: false
      },
      drivers: [
        {
          type: String
        },
      ],
      _id: false,
    },
  ],
});

export default mongoose.model("teams", Team);
