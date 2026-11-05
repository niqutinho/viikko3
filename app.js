import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;

// Middleware JSON-datan lukemiseen
app.use(express.json());
app.use("/static", express.static("public"));
app.use("/public", express.static("public"));

// Etusivu
app.get("/", (req, res) => {
  res.send("Welcome to my REST API!");
});

// GET: Kaikki resurssit
app.get("/api/resource", (req, res) => {
  res.json({
    id: 99,
    title: "My first item",
  });
});

// GET: Yksittäinen resurssi
app.get("/api/resource/:id", (req, res) => {
  res.json({
    id: req.params.id,
    title: "Resource " + req.params.id,
  });
});

// POST: Vastaanota JSON-dataa
app.post("/api/resource", (req, res) => {
  res.status(201).json({
    your_request: req.body,
  });
});

app.get("/api/v1/cats", (req, res) => {
  const cat = {
    cat_id: 1,
    name: "Milo",
    birthdate: "2022-05-15",
    weight: 4.5,
    owner: "Niklas",
    image: "https://loremflickr.com/320/240/cat",
  };

  res.json(cat);
});

// Käynnistä palvelin
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
