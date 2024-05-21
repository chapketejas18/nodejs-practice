import { Schema } from "mongoose";
import { IUser } from "./IUserModel";

export const userSchema: Schema<IUser> = new Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  role: { type: String, default: "user" },
});
