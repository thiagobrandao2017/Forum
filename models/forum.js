const db = require('../config/database');

module.exports = {
  findTopics() {
    return db.any(`
      SELECT title, topic_rating
      FROM topics
      ORDER BY topic_rating
      DESC
    `);
  },
  save(topic) {
    return db.one(`
      INSERT INTO topics (
        title,
        description
      ) VALUES (
        $/title/,
        $/description/
      )
      RETURNING *
      `, topic);
    },
};
