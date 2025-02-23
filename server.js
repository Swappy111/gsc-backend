require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const WebsiteClick = require("./models/WebsiteClick");

const app = express();
app.use(cors());
app.use(express.json()); 


mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));


app.get("/", (req, res) => {
  res.send("Server is running...");
});



app.get("/api/website-clicks", async (req, res) => {
  try {
    const data = await WebsiteClick.find();
    console.log(data);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
