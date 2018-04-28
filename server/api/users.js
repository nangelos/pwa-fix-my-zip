const express = require('express');
const router = express.Router();
const { User, Issue } = require('../db/models');

router.get('/', (req, res, next) => {
  User.findAll({
    include: Issue,
  })
    .then(users => {
      res.json(users);
    })
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  User.findById(req.params.id, {
    include: Issue,
  })
    .then(user => {
      res.json(user);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  User.create(req.body)
    .then(newUser => {
      res.status(201).json(newUser);
    })
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => {
      user.update(req.body);
    })
    .then(updatedUser => res.json(updatedUser))
    .catch(next);
});

module.exports = router;
