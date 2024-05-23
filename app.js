const express = require("express");
const mongoose = require("mongoose");

const router = require("./routes/routes");

const app = express();

app.use(express.json());
app.use("/api", router);
mongoose.connect(
  "mongodb+srv://ghutecharudatta:Charudatta@cluster0.prqkren.mongodb.net/UserManagment"
);

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});
database.once("connected", () => {
  console.log("Database Connected");
});

app.listen(5001, () => {
  console.log("http://localhost:5001");
});
