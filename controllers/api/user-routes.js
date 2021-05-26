const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE new user
router.post('/signup', async (req, res) => {
  try {
    const dbUserData = await User.create({
      user_name: req.body.user_name,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = dbUserData.id

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



// User Login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        user_name: req.body.user_name,
        // email: req.body.email
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'No user found with the given id.' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);
    // const validEmail = await dbUserData.checkPassword(req.body.email);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }
    console.log('dbUser data id check!!!!', dbUserData)

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = dbUserData.id
      req.session.user_name = dbUserData.user_name

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// //****************************** */
// // Get ser login information from user db
// router.get('/user/user_name', async (req, res) => {
//   return res.render('user', user[user_name])
//     });
// console.log('testing the user', user)
// //****************************** */



// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;