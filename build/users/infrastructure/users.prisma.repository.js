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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectPrismaRepository = void 0;
const database_1 = require("../../database/database");
exports.projectPrismaRepository = {
    createUser: (user) => __awaiter(void 0, void 0, void 0, function* () {
        const { user_id } = user, userData = __rest(user, ["user_id"]);
        const newUser = yield database_1.prisma.user.create({
            data: userData,
        });
        return newUser;
    }),
    getUserById: (userId) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield database_1.prisma.user.findUnique({
            where: { user_id: userId },
        });
        return user;
    }),
    getUserByEmail: (email) => __awaiter(void 0, void 0, void 0, function* () {
        return yield database_1.prisma.user.findFirst({
            where: { user_email: email },
        });
    }),
    updateUser: (userId, user) => {
        const updatedUser = database_1.prisma.user.update({
            where: { user_id: userId },
            data: user,
        });
        return updatedUser;
    },
    deleteUser: (userId) => __awaiter(void 0, void 0, void 0, function* () {
        yield database_1.prisma.user.delete({
            where: { user_id: userId },
        });
    }),
};
