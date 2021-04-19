import mongoose from "mongoose";

const { Schema } = mongoose;

const usersSchema = new Schema({
  firstName: { type: "String", required: true },
  lastName: { type: "String", required: true },

  //   title: { type: "String", required: true },
  //   content: { type: "String", required: true },
  //   slug: { type: "String", required: true },
  //   cuid: { type: "String", required: true },
  dateAdded: { type: "Date", default: Date.now, required: true },
});

export default mongoose.model("Users", usersSchema);
