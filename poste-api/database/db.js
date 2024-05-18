const sqlite3 = require('sqlite3').verbose();

// SQLite database connection
const db = new sqlite3.Database('post_project.db');

module.exports = db;
