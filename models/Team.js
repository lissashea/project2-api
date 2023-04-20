import mongoose from 'mongoose';
// import express from 'express'

const Schema = mongoose.Schema
const pointsByYearSchema = new Schema({
  year: Number,
  points: Number,
  drivers: [{
    driver1: String,
    driver2: String
  }]
}, { _id: false });

const TeamSchema = new Schema({
  teamName: { type: String },
  principal: { type: String },
  owner: { type: String },
  engine: { type: String },
  country: { type: String },
  championships: { type: Number },
  teamLogo: { type: String},
  teamPointsByYear: [pointsByYearSchema]
});

export const Team = mongoose.model('Team', TeamSchema);
export default Team