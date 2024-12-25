import { Router } from "express";
import getController from "./controllers/get.js";

const router = Router();

router.get('/', getController );