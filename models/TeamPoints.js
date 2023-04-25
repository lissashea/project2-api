//current WIP

import mongoose from 'mongoose';
// import express from 'express'

const Schema = mongoose.Schema
const teamPointsByYear = new Schema({
  teamName: String,
  pointsByYear: [
    {
      year: Number,
      points: Number
    }
  ]
})

export const TeamPointsByYear = mongoose.model('TeamPointsByYear', teamPointsByYear);
export default TeamPointsByYear