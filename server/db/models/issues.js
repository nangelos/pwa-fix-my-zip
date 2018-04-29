const Sequelize = require('sequelize');
const db = require('../index');

module.exports = db.define('issue', {
  imagePreviewUrl: {
    type: Sequelize.TEXT,
  },
  issueType: {
    type: Sequelize.ENUM('pothole', 'street-light', 'traffic-light'),
    allowNull: false,
  },
  latitude: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      min: -90,
      max: 90,
    },
  },
  longitude: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: { min: -180, max: 180 },
  },
  issueDescription: {
    type: Sequelize.TEXT,
  },
  fixed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});
