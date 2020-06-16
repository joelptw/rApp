const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({});

module.exports = mongoose.model("skills", SkillSchema);
