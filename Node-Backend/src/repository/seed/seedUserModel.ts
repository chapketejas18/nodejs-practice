import mongoose, { Document, Schema, Model } from "mongoose";

interface ISeedUser extends Document {
  username: string;
  email: string;
  password: string;
  role: string;
}

const seedUserSchema: Schema<ISeedUser> = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

const seeduser: Model<ISeedUser> = mongoose.model<ISeedUser>(
  "user",
  seedUserSchema
);

export default seeduser;
