const sqlite3 = require('sqlite3').verbose();

// Create a new SQLite database
const db = new sqlite3.Database('post_project.db', (err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        // Execute schema
        db.exec(`
            CREATE TABLE IF NOT EXISTS posts (
                post_id INTEGER PRIMARY KEY,
                title TEXT NOT NULL,
                content TEXT NOT NULL
            );
        `, (err) => {
            if (err) {
                console.error('Error creating table:', err.message);
            } else {
                console.log('Table created successfully.');
            }
        });
    }
});

// Close the database connection when done
db.close((err) => {
    if (err) {
        console.error('Error closing database:', err.message);
    } else {
        console.log('Disconnected from the SQLite database.');
    }
});
