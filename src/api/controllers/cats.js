import { catItems } from "../models/cats.js";

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

export const addCat = (req, res) => {
  if (!req.body || typeof req.body !== "object" || Array.isArray(req.body)) {
    return res.status(400).json({ message: "A cat object is required." });
  }

  const nextId = Math.max(0, ...catItems.map((cat) => cat.cat_id)) + 1;
  const cat = { ...req.body, cat_id: nextId };
  catItems.push(cat);

  res.status(201).json(cat);
};

export const updateCat = (req, res) => {
  res.json({ message: "Cat item updated." });
};

export const deleteCat = (req, res) => {
  res.json({ message: "Cat item deleted." });
};
