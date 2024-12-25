import { Router } from "express";
import userRoutes from "../modules/users/routes.js";
import productRoutes from "../modules/products/routes.js";

const router = Router();

router.use('/users', userRoutes);
router.use('/products', productRoutes);

export default router;