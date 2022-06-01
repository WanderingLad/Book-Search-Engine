const db = require('../config/connection');
const { User } = require('../models');

const userData = require('./userData.json');

db.once('open', async () => {
    const technologies = await Tech.insertMany(techData);

    process.exit(0);
  });