const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://mongo:27017/userdb")
  .then(() => console.log(" MongoDB Connected"))
  .catch(err => console.log(" DB error:", err));

const User = mongoose.model("User", new mongoose.Schema({ 
  name: String,
  email: String
}));


app.get("/api/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.post("/api/users", async (req, res) => {
  try {
    const { name, email } = req.body;  // get data from JSON request
    const user = new User({ name, email });
    await user.save();
    res.json({ message: "User created successfully", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


const PORT = 5000;
app.listen(PORT, () => console.log(` Backend running on port ${PORT}`));
