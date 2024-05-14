import { Schema } from "mongoose";
import { IUser } from "./IUserModel";

export const userSchema: Schema<IUser> = new Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  role: { type: String, enum: ["user", "admin"], default: "user" },
});
