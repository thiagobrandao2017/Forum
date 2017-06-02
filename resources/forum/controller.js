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

  formNew(req, res) {
    res.render('forum/new.ejs');
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

  show(req,res) {
    Forum.findComments(req.params.id)
    .then((comments_data) => {
      Forum.findById(req.params.id)
      .then((topic_data) => {
        res.render('forum/show', {
          comments: comments_data,
          topic: topic_data
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
  },


};
