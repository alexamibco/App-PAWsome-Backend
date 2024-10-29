import { Router } from "express";
import { createUser, getUserById, updateUser, deleteUser } from "./controller";

const router = Router();

router.post("/users", createUser);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
