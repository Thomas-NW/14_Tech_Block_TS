const router = require('express').Router();
const { User, Article, Comment } = require('../../models');

router.get('/', async (req, res) => {
    try {
      const commentData = await Comment.findAll({
        include: [{model: User,
          attributes: ['user_name']
        }]
    });

    console.log('Do we know the user namess', user_name)

    res.status(200).json(commentData);

      console.log('The article they are trying to view!!!', commentData)

    } catch (err) {
      res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
  try {
    console.log('WE hit the comment create route')
    const commentData = await Comment.create({
      comment: req.body.content,
      commenter_id: req.session.user_id,
      post_id: req.body.post_id,
    });
    res.status(200).json(commentData);
  } catch (err) {
    console.log('Errrrrr', err)
    res.status(400).json(err);
  }
});

module.exports = router;