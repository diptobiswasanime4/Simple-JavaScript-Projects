const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

function isAuthenticated(req, res, next) {
  const sessionId = req.body.sessionId;
  console.log(sessions[sessionId]);
  next();
}

const users = [
  {
    username: "user1",
    password: "pass1",
  },
  {
    username: "user2",
    password: "pass2",
  },
  {
    username: "user3",
    password: "pass3",
  },
];

const sessions = {};

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (user) => user.username == username && user.password == password
  );

  if (user) {
    const sessionId = Date.now().toString();
    sessions[sessionId] = Date.now();
    console.log(sessions);
    res.json({ sessionId: sessionId });
  } else {
    res.status(401).send("Invalid Credentials!");
  }
});

app.get("/users", isAuthenticated, (req, res) => {
  res.send("You're authenticated!");
});

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
