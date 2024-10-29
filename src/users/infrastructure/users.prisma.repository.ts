import { UsersRepository } from "../domain/users.repository";
import { prisma } from "../../database/database";
import { User } from "../domain/users.entity";

export const projectPrismaRepository: UsersRepository = {
  
  createUser: async (user: User): Promise<User> => {
    const { user_id, ...userData } = user;
    const newUser = await prisma.user.create({
      data: userData,
    });
    return newUser;
  },

  getUserById: async (userId: string): Promise<User | null> => {
    const user = await prisma.user.findUnique({
      where: { user_id: userId },
    });
    return user;
  },

 getUserByEmail: async (email: string): Promise<User | null> => {
    return await prisma.user.findFirst({
      where: { user_email: email },
    });
  },

  updateUser: (userId: string, user: Partial<User>): Promise<User> => {
    const updatedUser = prisma.user.update({
      where: { user_id: userId },
      data: user,
    });
    return updatedUser;
  },

  deleteUser: async (userId: string): Promise<void> => {
    await prisma.user.delete({
      where: { user_id: userId },
    });
  },
};
