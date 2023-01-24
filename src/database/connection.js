const mongoose = require("mongoose");

// DATABASE VARIABLE
const DB = process.env.DATABASE_URL;

// DATABASE CONNECTION VARIABLE
mongoose
  .connect(DB, {
    useNewUrlParser:true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("connected to database succesfully", DB);
  })
  .catch((err) => {
    console.log(err);
  });
