import { Schema } from "mongoose";
import { IUser } from "./IUserModel";

export const userSchema: Schema<IUser> = new Schema({
  username: {
    type: String,
  },
  city: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});
