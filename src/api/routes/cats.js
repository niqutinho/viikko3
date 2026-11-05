import { Router } from "express";
import {
  deleteCat,
  getCatById,
  getCats,
  postCat,
  updateCat,
} from "../controllers/cats.js";
import multer from "multer";

const router = Router();
const upload = multer({
  dest: "uploads/",
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.get("/", getCats);
router.get("/:id", getCatById);
router.post("/", upload.single("cat"), postCat);
router.put("/:id", updateCat);
router.delete("/:id", deleteCat);

export default router;
