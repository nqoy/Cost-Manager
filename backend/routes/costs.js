const router = require('express').Router();
let Cost = require('../models/cost.model');
let Computes = require('../models/compute.model');
const { v4: uuidv4 } = require('uuid');
let tempCost = [];
let computeSum;

router.route('/').get((req, res) => {
  Cost.find()
    .then(costs => res.json(costs))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Post Cost & Update Compute if exsists-----------------------------------
router.route('/add').post((req, res) => {
  const cost_id = uuidv4();
  const description = req.body.description;
  const category = req.body.category;
  const sum = Number(req.body.sum);
  const year = req.body.year;
  const month = req.body.month;

  const newCost = new Cost({
    cost_id,
    username,
    userid,
    description,
    category,
    sum,
    year,
    month
  });

  newCost.save()
    .then(() => res.json('Cost added!'))
    .catch(err => res.status(400).json('Error: ' + err));

  Computes.findOne({ 'year': year, 'month': month })
    .then(computes => computes.sum += sum)
    .catch(err => res.status(400).json('Error: ' + err));
});
// Post Cost & Update Compute if exsists-----------------------------------

// Get Cost by Year & Month -----------------------------------------------
router.route('/year/:year/month/:month').get((req, res) => {

  if (req.params.month === "All") {

    Cost.find({ 'year': req.params.year })
      .then(cost => tempCost = cost)
      .catch(err => res.status(400).json('Error: ' + err));
  }
  else {
    Cost.find({ 'year': req.params.year, 'month': req.params.month })
      .then(cost => tempCost = cost)
      .catch(err => res.status(400).json('Error: ' + err));
  }

  Computes.findOne({ 'year': req.params.year, 'month': req.params.month })
    .then(computes => computeSum = computes)
    .catch(err => res.status(400).json('Error: ' + err));

  if (computeSum === null) {
    let sums = 0;
    tempCost.forEach(cost => sums += cost.sum);

    const sum = sums;
    const year = req.params.year;
    const month = req.params.month;

    const newComputes = new Computes({
      sum,
      year,
      month
    });

    newComputes.save();
  }

  const data =  [tempCost, computeSum] ;

  res.json(data);
});
// Get Cost by Year & Month -----------------------------------------------

module.exports = router;