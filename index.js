const express = require("express");
const cors = require("cors");
// const tracker = require("./tracker");
// const { createUser, loginUser, getUsers } = require("./src/users");
const { getGoals, createGoal } = require("./src/goals");
const PORT = process.env.PORT || 3002;

const app = express();
app.use(cors());
app.use(express.json());

// app.post("/users", createUser);
// app.post("/users/login", loginUser);
// app.get("/users", getUsers);
app.get("/goals", getGoals);
app.post("/goals", createGoal);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
