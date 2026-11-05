import express from "express";
import "dotenv/config";
import catsRouter from "./api/routes/cats.js";
import usersRouter from "./api/routes/users.js";

const app = express();

app.use(express.json());
app.use("/static", express.static("public"));
app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.send("Welcome to my REST API!");
});

app.get("/api/resource", (req, res) => {
  res.json({
    id: 99,
    title: "My first item",
  });
});

app.get("/api/resource/:id", (req, res) => {
  res.json({
    id: req.params.id,
    title: "Resource " + req.params.id,
  });
});

app.post("/api/resource", (req, res) => {
  res.status(201).json({
    your_request: req.body,
  });
});

app.use("/api/v1/cats", catsRouter);
app.use("/api/v1/users", usersRouter);

export default app;
