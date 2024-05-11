import Joi, { Schema } from "joi";

const userSchema: Schema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

const mockUserSchema: Schema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30),
  city: Joi.string(),
  email: Joi.string().email(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
});

export { userSchema, mockUserSchema };
