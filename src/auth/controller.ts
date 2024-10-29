import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { projectPrismaRepository } from '../users/infrastructure/users.prisma.repository'; 

const userRepository = projectPrismaRepository; 

interface LoginRequestBody {
  user_email: string;
  user_password: string;
}

interface SignUpRequestBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const loginUser = async (req: Request<{}, {}, LoginRequestBody>, res: Response) => {
  try {
    const { user_email, user_password } = req.body;

    if (!user_email || !user_password) {
      res.status(400).json({ message: 'Email and password are required' });
      return;
    }

    const userFromDb = await userRepository.getUserByEmail(user_email);
    if (!userFromDb) {
      res.status(404).json({ message: 'User not found' });
      return; 
    }

    const isPasswordValid = await bcrypt.compare(user_password, userFromDb.user_password);
    if (!isPasswordValid) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    const token = jwt.sign({ userId: userFromDb.user_id }, process.env.JWT_SECRET!, {
      expiresIn: '1h',
    });

    res.status(200).json({ token, user_name: userFromDb.user_name, user_id: userFromDb.user_id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
  
  export const signUpUser = async (req: Request<{}, {}, SignUpRequestBody>, res: Response) => {
    try {
      const { firstName, lastName, email, password } = req.body;

      const existingUser = await userRepository.getUserByEmail(email);
      if (existingUser) {
        res.status(400).json({ message: 'User already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

       const newUser = await userRepository.createUser({
        user_name: firstName,
        user_lastname: lastName,
        user_email: email,
        user_password: hashedPassword,
        user_avatar: ''
      });

      const token = jwt.sign({ userId: newUser.user_id }, process.env.JWT_SECRET!, {
        expiresIn: '1h',
      });
  
      res.status(201).json({ 
        message: 'User created successfully', 
        token, 
        user_name: newUser.user_name, 
        user_id: newUser.user_id 
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };