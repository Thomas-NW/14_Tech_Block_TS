const { Article } = require('../models');

const articledata = [
  {
    title: 'The Secret Life of a Full-Stack Developer',
    content: 'This article examples a day in a software developer under COVID Conditions.',
    author_id: 1,
  },
  {
    title: 'Can NW Bootcamp manifest a sound education?',
    content: 'Many individuals strive for new lives and new opportunities, when signing up for the ...',
    author_id: 2,
  },
  {
    title: 'Where to life with a good work & spare time balance?',
    content: 'Find the right place to live becomes a greater challenge, with natural resources depleting, ….',
    author_id: 3,
  },
  
];

const seedArticle = () => Article.bulkCreate(articledata);

module.exports = seedArticle;