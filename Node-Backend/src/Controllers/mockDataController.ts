import { Request, Response } from "express";
import UserRepository from "../repository/user/UserRepository";
import { mockUserSchema } from "../config/joi";
import jwt from "jsonwebtoken";
class MockDataHandler {
  getData = async (request: Request, response: Response) => {
    try {
      const users = await UserRepository.getAllUsers();
      response.json(users);
    } catch (err) {
      const typedError = err;
      response.status(500).json({ error: typedError });
    }
  };

  createData = async (req: Request, res: Response): Promise<void> => {
    try {
      const body = req.body;
      const { error } = mockUserSchema.validate(body);
      if (error) {
        res.status(400).json({ error: error.details[0].message });
        return;
      }
      await UserRepository.createUser(body);
      res.json({ status: "Created Successfully" });
    } catch (error) {
      console.log("Error creating data:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };

  getDataById = async (req: Request, res: Response): Promise<void> => {
    try {
      const id: string = req.params.id;
      const user = await UserRepository.findUserById(id);
      if (!user) {
        res.status(404).json({ error: "User not found" });
        return;
      }
      res.json(user);
    } catch (err) {
      console.error("Error:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  deleteDataById = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id;
      const deletedUser = await UserRepository.deletdUserById(id);
      if (!deletedUser) {
        res.status(404).json({ message: "No data found for this ID" });
        return;
      }
      res.json({ status: "Deleted Successfully" });
    } catch (err) {
      console.error("Error:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  updateDataById = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id;
      const body = req.body;

      const { error } = mockUserSchema.validate(body);
      if (error) {
        res.status(400).json({ error: error.details[0].message });
        return;
      }

      const updatedUser = await UserRepository.updateDataById(id, body);
      if (!updatedUser) {
        res.status(404).json({ message: "No data found for this ID" });
        return;
      }
      res.json({ status: "Updated Successfully" });
    } catch (err) {
      console.error("Error:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  register = async (req: Request, res: Response) => {
    try {
      const body = req.body;
      if (!body.username || !body.email || !body.password) {
        res.status(400).json({ message: "Please provide all fields" });
      }

      const existingUser = await UserRepository.registerUser(body);
      if (existingUser) {
        res.status(400).json({ message: "User Signed up Successfully" });
      } else {
        res.status(404).json({ message: "User already exists" });
      }
    } catch (err) {
      console.error("Error:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const secretKey = process.env.SECRECT_KEY;
      console.log("secretKey", secretKey);
      const body = req.body;
      if (!body.username || !body.email || !body.password) {
        return res.status(400).json({ message: "Please provide all fields" });
      }
      const existingUser = await UserRepository.authUsers(body);
      if (existingUser) {
        const token = jwt.sign(
          { existingUser },
          "b44fd2de00412db5ebc7350536b59e86731142f100deef1d486972b9c22e6b11",
          {
            expiresIn: "30m",
          }
        );
        return res.status(200).json({ token: token, user: existingUser });
      } else {
        return res.status(404).json({ message: "User not found" });
      }
    } catch (err) {
      console.error("Error:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
}

export default new MockDataHandler();
