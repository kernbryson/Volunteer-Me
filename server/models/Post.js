const { Schema, model, Mongoose } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const postSchema = new Schema({
  postText: {
    type: String,
    required: "You need to leave a post!",
    minlength: 1,
    maxlength: 700,
    trim: true,
  },
  postAuthor: {
    type: String,
    required: true,
    trim: true,
  },

  volunteerDate: {
    type: String,
  },
  location: {
    type: String,
  },
  time: {
    type: String,
  },
  contact: {
    type: String,
  },
  title: {
    type: String,
  },
  category: {
    type: String,
  },
  volunteers: [{
    type: Schema.Types.ObjectId,
    ref: "User",
  }
  ],
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 300,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Post = model("Post", postSchema);

module.exports = Post;
