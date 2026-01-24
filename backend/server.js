const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());  // ✅ important fix
app.use(express.json());

const db = new sqlite3.Database(
  path.join(__dirname, "visitors.db")
);

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

app.get("/api/visitors", (req, res) => {
  const peek = req.query.peek === "true";

  if (peek) {
    db.get("SELECT count FROM visitors WHERE id = 1", (err, row) => {
      if (err) return res.status(500).json({ error: "DB error" });
      res.json({ visitors: row.count });
    });
  } else {
    db.run("UPDATE visitors SET count = count + 1 WHERE id = 1", () => {
      db.get("SELECT count FROM visitors WHERE id = 1", (err, row) => {
        if (err) return res.status(500).json({ error: "DB error" });
        res.json({ visitors: row.count });
      });
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});