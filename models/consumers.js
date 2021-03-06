const db = require('../lib/dbConnect');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const salt = 10;

// Creates a user (consumer) and encrypts its password w/ bcrypt
function createConsumer(req, res, next) {
  console.log("creating a consumer");
  db.none(`INSERT INTO consumers (name, email, username, password) Values ($1, $2, $3, $4)`,
    [req.body.name, req.body.email, req.body.username, bcrypt.hashSync(req.body.password, salt)])
    .then(next())
    .catch(error => next(error));
}

// checks to see if username = password, logs user in
function authenticateConsumer(req, res, next) {
  console.log('Performing user auth (consumer)!');
  db.one(`SELECT * FROM consumers WHERE username = $1`, req.body.username)
    .then((data) => {
      const consumerID = data.id;
      const match = bcrypt.compareSync(req.body.password, data.password);
      if (match) {
        const myToken = jwt.sign({ username: req.body.username }, process.env.SECRET);
        res.status(200).json({token: myToken, id: consumerID});
        console.log('successful sign in');
      } else {
        res.status(500).send('wrong password');
        console.log('wrong password');
      }
    })
    .catch(error => console.log(error));
}

// renders all of the user's information to state, to be displayed on dashboard
function getConsumerDashboard(req, res, next) {
  console.log("this is the consumer's id: ", req.body.consumerID)
  db.any(`SELECT * FROM consumers WHERE id = $1;`, req.body.consumerID)
    .then((consumers) => {
      res.rows = consumers;
      next();
    })
    .catch(error => console.log(error));
}

module.exports = {
  createConsumer,
  authenticateConsumer,
  getConsumerDashboard
}
