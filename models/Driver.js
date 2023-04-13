import mongoose from 'mongoose';

const { Schema } = mongoose;

const pointsByYearSchema = new Schema ({
      year: {
        type: Number
      },
      points: {
        type: Number
      },
      teamName: {
        type: String
      },
    },
    { _id: false }
  )

const DriverSchema = new Schema({
  name: {
    type: String
    
  },
  nationality: {
    type: String
   
  },
  team: {
    type: String
    
  },
  officialNumber: {
    type: Number
  },
  podiums: {
    type: Number
  },
  pointsByYear:[pointsByYearSchema],
  
  image: {
    type: String
  },
});

export default mongoose.model('drivers', DriverSchema);