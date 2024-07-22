import mongoose, { Document, Schema, Model } from "mongoose";

interface ICountry extends Document {
  name: string;
  code: string;
  playing: boolean;
}

const countrySchema: Schema<ICountry> = new Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  playing: {
    type: Boolean,
    required: true,
  },
});

const Country: Model<ICountry> = mongoose.model<ICountry>(
  "Country",
  countrySchema
);

export default Country;
