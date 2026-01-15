const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

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
  console.log(`Server running on port ${PORT}`);
});