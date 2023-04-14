import mongoose from 'mongoose';
import express from 'express'

const Schema = mongoose.Schema

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
  _id: mongoose.Schema.Types.ObjectId,
  teamName: { type: String },
  teamID: { type: Number },
  previousNames: { type: [String] },
  principal: { type: String },
  owner: { type: String },
  engine: { type: String },
  country: { type: String },
  championships: { type: Number },
  teamLogo: { type: String},
  pointsByYear: [pointsByYearSchema]
}, { _id: false });

const Team = mongoose.model('team', TeamSchema);

export default Team;