const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routers/router")
mongoose.connect('mongodb://localhost:27017/employeeManagement');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "DB connection error: "));
db.once("open", function () {
  console.log("DB Connected successfully");
});

app.use(express.json());
app.use("get",() => {
    console.log("hiiii ajay")
})

app.use("/api", router);

app.listen(3000, () => {
	console.log("Server has started!")
});
