import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import connectDB from "./config/connectDB";
require("dotenv").config();

let PORT = process.env.PORT || 8080;
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

connectDB();

app.listen(PORT, () => {
    console.log("listening on port " + PORT);
});
