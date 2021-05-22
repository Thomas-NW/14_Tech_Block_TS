const { Comment } = require('../models');

const commentdata = [
    {
    comment: 'You guys did a great job with the project. Keep it up!',
    commenter_id: 1,
    post_id: 1,
  },
  {
    comment: 'I am wondering if you could provide references',
    commenter_id: 3,
    post_id: 2,
  },
  {
    comment: 'I am not in agreement with the work you have done. Feel free to contact me at any time.',
    commenter_id: 2,
    post_id: 3,
  },
  
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;