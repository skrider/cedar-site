import { Schema, model } from 'mongoose';

const CommentSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: false
  },
  date: {
    type: String,
    required: true
  },
  authorLatitude: {
    type: String,
    required: false
  },
  authorLongitude: {
    type: String,
    required: false
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

CommentSchema.pre("save", function(this : TextComment, next) {
  this.approved = this.approved || false;
  this.rejected = this.rejected || false;
  this.date = this.date || 1625346863;
  next();
})

export default model("Comment", CommentSchema);
