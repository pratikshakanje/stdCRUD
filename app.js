const cl = console.log;

const express = require("express")

const router = require("./routers/stdRouters.js")

const app = express();

app.use(express.json())

app.use("/controllersapi/student", router)

module.exports = app