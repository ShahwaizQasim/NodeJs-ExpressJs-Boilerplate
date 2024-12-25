import { Router } from "express";
import getController from "./controllers/get.js";
import postController from "./controllers/post.js";

const userRoutes = Router();

userRoutes.get('/', getController );
userRoutes.post('/', postController );

export default userRoutes;