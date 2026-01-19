const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./tasks.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      isDone INTEGER DEFAULT 0,
      priority INTEGER
    )
  `);
});

module.exports = db;
