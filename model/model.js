const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true });
const studentSchema = new mongoose.Schema({
  student_name: {
    type: String,
    require: false,
  },
  student_age: {
    type: Number,
    require: false,
  },
});

module.exports = mongoose.model("studentdata", studentSchema);

// module.exports ={
//     studentSchema
// }
