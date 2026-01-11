const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5001;

app.use(cors());

let visitors = 0;

app.get("/api/data", (req, res) => {
  res.json({
    project: "Soft Atlas",
    message: "Backend connected successfully",
    author: "Aparajaya",
  });
});

app.get("/api/visitors", (req, res) => {
  visitors += 1;
  res.json({ visitors });
});

app.listen(PORT, () => {
  console.log("🚨 THIS IS THE VISITOR SERVER VERSION 🚨");
  console.log(`Server running on http://localhost:${PORT}`);
});