import mongoose from 'mongoose';
import Team from './Team.js';
import express from 'express'

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
    type: Object
  },
  officialNumber: Number,
  podiums: Number,
  wins: Number,
  pointsByYear: [pointsByYearSchema],
  image: String
});

export const Driver = mongoose.model("Driver", DriverSchema)
export default Driver