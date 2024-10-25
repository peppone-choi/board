import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  ip: {
    type: String,
    required: true,
  },
});

export const MongooseComment = mongoose.model<IComment>("Comment", CommentSchema);
