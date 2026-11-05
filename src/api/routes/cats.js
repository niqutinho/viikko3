import { Router } from "express";
import {
  addCat,
  deleteCat,
  getCatById,
  getCats,
  updateCat,
} from "../controllers/cats.js";

const router = Router();

router.get("/", getCats);
router.get("/:id", getCatById);
router.post("/", addCat);
router.put("/:id", updateCat);
router.delete("/:id", deleteCat);

export default router;
