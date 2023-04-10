import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Team = new Schema({
  _id: { 
    type: String 
  },
  teamName: {
    type: String,
    required: false
  },
  teamID: {
    type: Number,
    required: false
  },
  previousNames: [{
    type: String
  }],
  principal: {
    type: String,
    required: false
  },
  owner: {
    type: String,
    required: false
  },
  engine: {
    type: String,
    required: false
  },
  country: {
    type: String,
    required: false
  },
  championships: {
    type: Number,
    required: false
  },
  teamLogo: {
    type: String,
    required: false
  },
  seasons: [{
    year: {
      type: Number,
      required: false,
      index: true
    },
    drivers: [{
      type: String,
      required: false
    }],
    _id: false
  }]
});

export default mongoose.model("teams", Team);
