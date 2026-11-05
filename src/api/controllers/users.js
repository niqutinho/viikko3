import { userItems } from "../models/users.js";

export const getUsers = (req, res) => {
  res.json(userItems);
};

export const getUserById = (req, res) => {
  const user = userItems.find((item) => item.user_id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({ message: "User not found." });
  }

  res.json(user);
};

export const addUser = (req, res) => {
  if (!req.body || typeof req.body !== "object" || Array.isArray(req.body)) {
    return res.status(400).json({ message: "A user object is required." });
  }

  const nextId = Math.max(0, ...userItems.map((user) => user.user_id)) + 1;
  const user = { ...req.body, user_id: nextId };
  userItems.push(user);

  res.status(201).json(user);
};

export const updateUser = (req, res) => {
  res.json({ message: "User item updated." });
};

export const deleteUser = (req, res) => {
  res.json({ message: "User item deleted." });
};
