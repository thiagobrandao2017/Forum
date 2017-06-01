const Forum = require('../../models/forum');

module.exports = {

  index(req, res) {
    Forum.findTopics()
      .then((topics_data) => {
        res.render('forum/index', {
          topics: topics_data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  create(req, res) {
  Forum.save(req.body.topic)
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    });
 },

};
