// backend/server.js

const express = require('express');
const bodyParser = require('body-parser');
const postsRouter = require('./routes/posts');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3500;
app.use(cors({ origin: 'http://localhost:4200' }));
// Use body-parser middleware to parse JSON request bodies
app.use(bodyParser.json());
// Use the posts router for routes related to posts
app.use('/posts', postsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
