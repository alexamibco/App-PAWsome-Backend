"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUserByEmail = exports.getUserById = exports.createUser = void 0;
const infrastructure_1 = require("../infrastructure");
const createUser = (userRepository, user) => {
    try {
        return userRepository.createUser(user);
    }
    catch (error) {
        throw new Error(`Unable to create user: ${error}`);
    }
};
exports.createUser = createUser;
const getUserById = (userRepository, userId) => {
    try {
        return userRepository.getUserById(userId);
    }
    catch (error) {
        throw new Error(`Unable to get user by ID: ${error}`);
    }
};
exports.getUserById = getUserById;
const getUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return yield infrastructure_1.projectPrismaRepository.getUserByEmail(email);
});
exports.getUserByEmail = getUserByEmail;
const updateUser = (userRepository, userId, user) => {
    try {
        return userRepository.updateUser(userId, user);
    }
    catch (error) {
        throw new Error(`Unable to update user: ${error}`);
    }
};
exports.updateUser = updateUser;
const deleteUser = (userRepository, userId) => {
    try {
        return userRepository.deleteUser(userId);
    }
    catch (error) {
        throw new Error(`Unable to delete user: ${error}`);
    }
};
exports.deleteUser = deleteUser;
