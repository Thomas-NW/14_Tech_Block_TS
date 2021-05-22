// User login 
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbUserData => {
        if(!dbUserData) {
            res.status(404)
            .json({ message: 'No user found with the given id.'});
            return;
        }
       
        const correctPassword = dbUserData.checkPassword(req.body.password);

        if (!correctPassword) {
            res.status(400).json({ message: 'Incorrect Password' })
            return;
        }

        req.session.save(() => {
                req.session.user_id = dbUserData.id;
                // req.session.email = dbUserData.email;
                req.session.owner_name = dbUserData.owner_name;
                req.session.loggedIn = true;

                res.json({ user: dbUserData, message: "You have been logged in." });
        });
    });
});