const { connectDb } = require("./dbConnect");

exports.getGoals = (request, response) => {
  const db = connectDb();
  db.collection("Goals")
    .get()
    .then((snapshot) => {
      console.log("here");
      const goals = snapshot.docs.map((doc) => {
        let goal = doc.data();
        goal.id = doc.id;
        return goal;
      });
      response.send(goals);
    })
    .catch((err) => response.status(500).send(err));
};

// post goal
// with name, title, description
//test in postman
exports.createGoal = (request, response) => {
  const newGoal = {
    name: request.body.name,
    title: request.body.title,
    description: request.body.description,
    done: false,
  };
  const db = connectDb();
  db.collection("Goals")
    .add(newGoal)
    .then((doc) => response.status(201).send({ id: doc.id }))
    .catch((err) => response.status(500).send(err));
};

exports.updateGoal = (request, response) => {
  const { goalId } = request.params;
  const isDone = request.body.done;
  const db = connectDb();
  db.collection("Goals")
    .doc(goalId)
    .update({
      done: isDone
        .then((doc) => response.status(200).send(doc))
        .catch((err) => response.status(500).send(err)),
    });
};
