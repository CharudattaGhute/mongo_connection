const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
  employee_name: {
    type: String,
    require: false,
  },
  employee_age: {
    type: Number,
    require: false,
  },
  employee_position: {
    type: String,
    require: false,
  },
  employee_email: {
    type: String,
    require: false,
  },
  employee_password: {
    type: Number,
    require: false,
  },
});

module.exports = mongoose.model("employeedata", employeeSchema);
