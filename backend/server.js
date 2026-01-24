const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5001;

const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const db = new sqlite3.Database(
  path.join(__dirname, "visitors.db")
);

app.use(cors());
app.use(express.json());

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS visitors (
      id INTEGER PRIMARY KEY,
      count INTEGER
    )
  `);

  db.run(`
    INSERT OR IGNORE INTO visitors (id, count)
    VALUES (1, 0)
  `);
});


app.get("/api/data", (req, res) => {
  res.json({
    project: "Soft Atlas",
    message: "Backend connected successfully",
    author: "Aparajaya",
  });
});

app.get("/api/visitors", (req, res) => {
  db.serialize(() => {
    db.run(
      "UPDATE visitors SET count = count + 1 WHERE id = 1"
    );

    db.get(
      "SELECT count FROM visitors WHERE id = 1",
      (err, row) => {
        if (err) {
          return res.status(500).json({ error: "DB error" });
        }
        res.json({ visitors: row.count });
      }
    );
  });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});