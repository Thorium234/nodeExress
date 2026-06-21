const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 1121;

// Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './test');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Initialized Multer with Storage and 10MB Size Limit
const upload = multer({ 
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 } 
});

// Ensure target directory exists
if (!fs.existsSync('./test')) {
  fs.mkdirSync('./test');
}

// Multiple File Upload Handling (POST Route)
app.post('/upload', upload.array('file', 4), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).send('No files uploaded');
  }
  res.send(`Successfully uploaded ${req.files.length} files`);
});

// Serving the Upload Form with HTML multiple attribute (GET Route)
app.get('/', (req, res) => {
  res.send(`
    <h1>Upload Files</h1>
    <form action="/upload" method="post" enctype="multipart/form-data">
      <input type="file" name="file" multiple />
      <button type="submit">Upload</button>
    </form>
  `);
});

// Start the Server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

