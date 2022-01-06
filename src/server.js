const express = require("express");
const app = express();

const router = require("./app/routers/index");
require('dotenv').config();

const PORT = process.env.PORT | 9999;

app.use(express.json());

router.routes(app);

app.listen(PORT, ()=>{
    console.log(`App is listening on port: ${PORT}`)
});