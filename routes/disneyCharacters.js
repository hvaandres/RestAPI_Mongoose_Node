const express = require("express");
const router = express.Router();
const Disney = require("../models/disneyCharacter");

// Getting all character

router.get("/", async (req, res) => {
  try {
    const character = await Disney.find();
    res.json(character);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Getting one Character
router.get("/:id", getCharacter, (req, res) => {
  res.json(res.character);
});

// Creating new Character
router.post("/", async (req, res) => {
  const character = new Disney({
    name: req.body.name,
    details: req.body.details,
  });
  try {
    const newCharacter = await character.save();
    res.status(201).json({ newCharacter });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Updating one character
router.patch("/:id", getCharacter, async (req, res) => {
  if (req.body.name != null) {
    res.character.name = req.body.name;
  }
  if (req.body.details != null) {
    res.character.details = req.body.details;
  }
  try {
    const updateCharacter = await res.character.save();
    res.json(updateCharacter);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Deleting one character
router.delete("/:id", getCharacter, async (req, res) => {
  try {
    await res.character.remove();
    res.json({ message: "Deleted character" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getCharacter(req, res, next) {
  let character;
  try {
    character = await character.findById(req.params.id);
    if (character == null) {
      return res.status(404).json({ message: "Cannot find character" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.character = character;
  next();
}

module.exports = router;
