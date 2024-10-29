import { UsersRepository } from '../domain/users.repository';
import { User } from '../domain/users.entity';
import { projectPrismaRepository } from '../infrastructure';

export const createUser = (
  userRepository: UsersRepository,
  user: User
) => {
  try {
    return userRepository.createUser(user);
  } catch (error) {
    throw new Error(`Unable to create user: ${error}`);
  }
};

export const getUserById = (
  userRepository: UsersRepository,
  userId: string
) => {
  try {
    return  userRepository.getUserById(userId);
  } catch (error) {
    throw new Error(`Unable to get user by ID: ${error}`);
  }
};

export const getUserByEmail = async (email: string) => {
  return await projectPrismaRepository.getUserByEmail(email);
};

export const updateUser = (
  userRepository: UsersRepository,
  userId: string,
  user: Partial<User>
)=> {
  try {
    return userRepository.updateUser(userId, user);
  } catch (error) {
    throw new Error(`Unable to update user: ${error}`);
  }
};

export const deleteUser = (
  userRepository: UsersRepository,
  userId: string
) => {
  try {
    return userRepository.deleteUser(userId);
  } catch (error) {
    throw new Error(`Unable to delete user: ${error}`);
  }
};