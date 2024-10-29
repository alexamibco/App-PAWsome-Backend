import { User } from './users.entity';

export interface UsersRepository {
  createUser(user: User): Promise<User>;
  getUserById(userId: string): Promise<User | null>; 
  getUserByEmail(email: string): Promise<User | null>;
  updateUser(userId: string, user: Partial<User>): Promise<User>; 
  deleteUser(userId: string): Promise<void>;
}