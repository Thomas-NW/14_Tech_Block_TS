const { User } = require('../models');

const userdata = [
  {
    user_name: 'thomas_03',
    email: "thomas@testing.com",
    password: '12345qwert',
    
  },
  {
    user_name: 'hans',
    email: "hans@testing.com",
    password: '12345qwe',
    
  },
  {
    user_name: 'helga',
    email: "helga@testing.com",
    password: '12345qwe',
    
  },
  
  
  
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;