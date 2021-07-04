import { Schema, model } from 'mongoose';

const SongSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  rejected: {
    type: Boolean,
    required: false
  },
  approved: {
    type: Boolean,
    required: false
  }
})

export default model("Song", SongSchema);
