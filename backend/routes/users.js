const router = require('express').Router();
let User = require('../models/user.model');
const { v4: uuidv4 } = require('uuid');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

  console.log(req.body);
  console.log("------req-------");
  const username = req.body.username;
  const user_id = req.body.user_id;
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const birthday = req.body.birthday;
  const marital_status = req.body.marital_status;
  const user_identifier = uuidv4();

  const newUser = new User({
    username, user_id, first_name, last_name,
    birthday, marital_status, user_identifier
  });

  console.log(newUser);
  console.log("------user-------");

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/username/:username/userid/:userid').get((req, res) => {

  User.find({ 'username': req.params.username, 'userid': req.params.userid })
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;