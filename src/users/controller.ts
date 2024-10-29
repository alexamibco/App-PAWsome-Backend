import { Request, Response } from 'express';
import { projectPrismaRepository } from './infrastructure/users.prisma.repository'; 
import * as userService from './application/getUsers'; 
import bcrypt from 'bcrypt';

const userRepository = projectPrismaRepository; 

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;

    const hashedPassword = await bcrypt.hash(user.user_password, 10);
    user.user_password = hashedPassword;

    const newUser = await userService.createUser(userRepository, user);
    res.status(201).json(newUser); 
  } catch (error) {
    res.status(500).json({ message: `Unable to create user: ${error}` });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id; 
    const user = await userService.getUserById(userRepository, userId);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    }
     res.json(user);
  } catch (error) {
    res.status(500).json({ message: `Unable to get user: ${error}` });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id; 
    const userUpdates = req.body; 
    const updatedUser = await userService.updateUser(userRepository, userId, userUpdates);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: `Unable to update user: ${error}` });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    await userService.deleteUser(userRepository, userId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: `Unable to delete user: ${error}` });
  }
};