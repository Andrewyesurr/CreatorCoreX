import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    uid: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: false,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['creator', 'teamLeader', 'individual'],
      required: true,
    },
    location: {
      type: String,
      required: false,
    },
    tags: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model('Post', postSchema);
export default Post;
