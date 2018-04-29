const express = require('express');
const router = express.Router();
const { User, Issue } = require('../db/models');

router.get('/', (req, res, next) => {
  Issue.findAll()
    .then(issues => {
      res.json(issues);
    })
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  Issue.findById(req.params.id)
    .then(issue => res.json(issue))
    .catch(next);
});

router.post('/', (req, res, next) => {
  console.log('here is the req.body>>>>>>', req.body);
  Issue.create(req.body)
    .then(newIssue => {
      res.status(201).json(newIssue);
    })
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  Issue.findById(req.params.id)
    .then(issue => {
      issue.update(req.body);
    })
    .then(updated => res.json(updated))
    .catch(next);
});

module.exports = router;
