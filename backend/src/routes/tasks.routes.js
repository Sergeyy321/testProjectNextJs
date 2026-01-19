const express = require("express");
const router = express.Router();
const db = require("../db/database");

router.get("/", (req, res) => {
  let query = "SELECT * FROM tasks";
  const params = [];

  if (req.query.status === "done") {
    query += " WHERE isDone = 1";
  }

  if (req.query.status === "undone") {
    query += " WHERE isDone = 0";
  }

  db.all(query, params, (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
});

router.post("/", (req, res) => {
  const { title, priority } = req.body;

  db.run(
    "INSERT INTO tasks (title, priority) VALUES (?, ?)",
    [title, priority],
    function (err) {
      if (err) return res.status(500).json(err);
      res.json({ id: this.lastID });
    }
  );
});

router.patch("/:id", (req, res) => {
  const { isDone } = req.body;

  db.run(
    "UPDATE tasks SET isDone = ? WHERE id = ?",
    [isDone ? 1 : 0, req.params.id],
    () => res.json({ success: true })
  );
});

router.delete("/:id", (req, res) => {
  db.run("DELETE FROM tasks WHERE id = ?", [req.params.id], () =>
    res.json({ success: true })
  );
});

module.exports = router;
