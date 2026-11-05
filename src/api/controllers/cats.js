import { addCat as saveCat, catItems } from "../models/cats.js";

export const getCats = (req, res) => {
  res.json(catItems);
};

export const getCatById = (req, res) => {
  const cat = catItems.find((item) => item.cat_id === Number(req.params.id));

  if (!cat) {
    return res.status(404).json({ message: "Cat not found." });
  }

  res.json(cat);
};

export const postCat = (req, res) => {
  console.log("Cat form data:", req.body);
  console.log("Uploaded cat file:", req.file);

  if (!req.file) {
    return res.status(400).json({ message: "A cat image file is required." });
  }

  const cat = saveCat(req.body, req.file.filename);
  res.status(201).json(cat);
};

export const updateCat = (req, res) => {
  res.json({ message: "Cat item updated." });
};

export const deleteCat = (req, res) => {
  res.json({ message: "Cat item deleted." });
};
