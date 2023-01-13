const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  projectId: {
    type: String,
    required: true,
  },
  projectName: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("project", projectSchema);