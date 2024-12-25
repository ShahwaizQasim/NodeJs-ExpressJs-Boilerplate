import { Router } from "express";
import getController from "./controllers/get.js";
import postController from "./controllers/post.js";
import deleteController from "./controllers/delete.js";
import updateController from "./controllers/update.js";

const userRoutes = Router();

userRoutes.get('/', getController );
userRoutes.post('/', postController );
userRoutes.delete('/:id', deleteController );
userRoutes.put('/:id', updateController );

export default userRoutes;