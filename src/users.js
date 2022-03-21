exports.getUsers = (req, res) => {
  res.send("placeholder");
};
if (!req.body || !req.body.email || !req.body.password) {
  // invalid request
  res.status(400).send("Invalid request");
}
const newUser = req.body;

db.collection("user").add(newUser).then().catch();
