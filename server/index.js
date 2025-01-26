import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import authRoutes from "./routers/auth.js"

const app = express();
const PORT = 4000;

app.use(morgan("tiny"));
app.use(express.json());

mongoose
.connect()
.then(()=> console.log("mongodb connected"))
.catch((err)=> console.log("err =>", err))

app.get("/", (req, res)=> res.send("server is Running"))

app.use("/auth", authRoutes)

app.listen(PORT, ()=> console.log("Server is Running on Port" + PORT))