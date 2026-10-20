const cl = console.log;

const express = require("express")

const router = require("./routers/stdRouters")

const app = express();

app.use(express.json())

app.use("/controllersapi/std", router)

module.exports = app