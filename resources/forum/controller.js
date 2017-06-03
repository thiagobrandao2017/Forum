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

  createComment(req,res) {
    Forum.saveComment(req.body.comment)
    .then(() => {
      res.redirect(`/forum/${req.params.id}`);
    })
    .catch((err) => {
      console.log(err);
    });
  },

  update(req,res) {
    Forum.updateRating(req.params.id)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.log(err);
    });
  },

  updateComment(req,res){
    Forum.updateCommentRating(req.body)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.log(err);
    });
  }
};
