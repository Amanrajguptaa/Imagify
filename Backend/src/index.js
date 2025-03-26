import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./db/index.js";
import userRouter from "./routes/user.route.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.listen(port, (req, res) => {
      console.log(`Server running on port: ${port}`);
    });
  })
  .catch((err) => {
    console.log("Connection to DB Failed", err);
  });

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use('/api/user',userRouter);
