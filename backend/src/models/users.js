import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: { type: "String", required: false, index: true },
  lastName: { type: "String", required: false, index: true },
  password: { type: "String", required: true, index: true },
  email: { type: "String", required: true, index: true },

  //   title: { type: "String", required: true },
  //   content: { type: "String", required: true },
  //   slug: { type: "String", required: true },
  //   cuid: { type: "String", required: true },
  dateAdded: { type: "Date", default: Date.now, required: true, index: true },
});

export default mongoose.model("Users", userSchema);
