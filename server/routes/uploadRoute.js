const express = require('express');
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post('/bank-documents', upload.array('files'), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: 'At least one file is required' });
  }

  const csvFiles = req.files.filter(f => f.originalname.endsWith(".csv"));
  const pdfFiles = req.files.filter(f => f.originalname.endsWith(".pdf"));

  if (csvFiles.length === 0) {
    return res.status(400).json({ error: "At least one CSV file is required" });
  }

  res.json({
    message: "Files received",
    csvFiles: csvFiles.map(f => f.originalname),
    pdfFiles: pdfFiles.map(f => f.originalname),
  });
});

module.exports = router;
