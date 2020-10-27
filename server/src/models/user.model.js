import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  name: { type: String, required: true }
});

export default model("User", UserSchema);