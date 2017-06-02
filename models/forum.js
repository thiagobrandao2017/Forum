const db = require('../config/database');

module.exports = {
  findTopics() {
    return db.any(`
      SELECT *
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

      findById(id) {
        return db.one(`
          SELECT *
          FROM topics
          WHERE id = $1
          `, id);
        },

        findComments(topic_id) {
          return db.any(`
            SELECT *
            FROM comments WHERE topics_id = $1
            ORDER by comment_rating
            DESC
            `, [topic_id]);
          }

        };
