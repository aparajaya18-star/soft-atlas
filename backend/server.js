const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

app.get("/api/data", (req, res) => {
  res.status(200).json({
    project: "Soft Atlas",
    message: "Backend connected successfully",
    author: "Aparajaya",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
