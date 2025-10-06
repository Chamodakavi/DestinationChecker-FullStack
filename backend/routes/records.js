const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const Record = require("../models/Record");
const apiKeyAuth = require("../middleware/apiKeyAuth");
const oauth2Auth = require("../middleware/oauth2Auth");

router.post(
  "/",
  apiKeyAuth,
  oauth2Auth,
  body("data").notEmpty().withMessage("Missing data field"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const newRecord = new Record({ data: req.body.data });
      await newRecord.save();
      res.status(201).json({ message: "Record stored", id: newRecord._id });
    } catch (err) {
      console.log("Record save error:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

router.get("/", apiKeyAuth, oauth2Auth, async (req, res) => {
  try {
    const records = await Record.find().sort({ createdAt: -1 });
    res.json(records);
  } catch (err) {
    console.log("Error fetching records:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
