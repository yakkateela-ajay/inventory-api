const mongoose = require("mongoose");

const employeeProjectSchema = new mongoose.Schema({
  employeeID: {
    type: String,
    required: true,
  },
  projectId: {
    type: String,
    required: true,
  },
  dateJoined: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("employeeProject", employeeProjectSchema);