const { Schema, model } = require("mongoose");
const rsvpSchema = new Schema({
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});
const Rsvp = model('Rsvp', rsvpSchema);
module.exports = Rsvp;