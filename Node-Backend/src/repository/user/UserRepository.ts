import { trusted } from "mongoose";
import { IUser } from "./IUserModel";
import { userModel } from "./UserModel";
import bcrypt from "bcrypt";

class UserRepository {
  getAllUsers = async () => {
    return userModel.find();
  };

  createUser = async (body: IUser) => {
    return userModel.create(body);
  };

  findUserById = async (id: String) => {
    return userModel.findById(id);
  };

  deletdUserById = async (id: string) => {
    return userModel.findByIdAndDelete(id);
  };

  updateDataById = async (id: string, body: Partial<IUser>) => {
    return userModel.findByIdAndUpdate(id, body, { new: true });
  };

  registerUser = async (body: IUser) => {
    const email = body.email;
    const user = await userModel.findOne({ email });
    if (!user) {
      return userModel.create(body);
    }
  };

  authUsers = async (body: IUser) => {
    const email = body.email;
    const user = await userModel.findOne({ email });
    console.log(user);
    if (!user) {
      return null;
    }
    if (user.password !== body.password) {
      return null;
    }
    return user;
  };
}

export default new UserRepository();
