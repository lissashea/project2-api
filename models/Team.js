import mongoose from 'mongoose';
// import express from 'express'

const Schema = mongoose.Schema

const driverIdSchema = new Schema({
  driver1: { type: String },
  driver2: { type: String }
}, { _id: false });

const teamPointsByYearSchema = new Schema({ 
  year: { type: Number },
  points: { type: Number },
  drivers: [driverIdSchema]
}, { _id: false });

const TeamSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  teamName: { type: String },
  principal: { type: String },
  owner: { type: String },
  engine: { type: String },
  country: { type: String },
  championships: { type: Number },
  teamLogo: { type: String},
  teamPointsByYear: [teamPointsByYearSchema]
}, { _id: false });

export const Team = mongoose.model('Team', TeamSchema);
export default Team