import "dotenv/config";
import express from "express";
import database from "./database/database.js";
import route from "./routes/index.js";

const app = express();
const port = 3000 || process.env.PORT;
database;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use("/", route);

app.listen(port, () => {
  console.log(`server is working on ${port}`);
});
