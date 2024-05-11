import { Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  city: string;
  email: string;
  password: string;
}
