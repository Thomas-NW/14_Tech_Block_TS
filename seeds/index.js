const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedArticles = require('./articleData');
const seedComments = require('./commentData');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedArticles();
  console.log('\n----- ARTICLES SEEDED -----\n');

  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();