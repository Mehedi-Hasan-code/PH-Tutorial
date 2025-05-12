const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json())

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("user server is running");
});

const users = [
  { id: 1, name: "ovi", email: "ovi@gmail.com" },
  { id: 2, name: "abc", email: "abc@gmail.com" },
  { id: 3, name: "cbc", email: "cbc@gmail.com" },
];

app.get("/users", (req, res) => {
  res.send(users);
});
app.post("/users", (req, res) => {
  const newUser = req.body
  newUser.id = users.length + 1
  res.send(newUser)
  users.push(newUser)
});

app.listen(port, () => {
  console.log(`users server is running on port ${port}`);
});
