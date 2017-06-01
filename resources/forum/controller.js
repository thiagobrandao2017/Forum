const Forum = require('../../models/forum');

module.exports = {
  index(req, res) {
    Forum.findTopics()
      .then((topics_data) => {
        res.render('forum/index', {
          topics: topics_data,
        });
      })
      .catch(console.log('something went wrong'));
  },

};
