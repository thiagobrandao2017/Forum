DROP TABLE IF EXISTS topics;
DROP TABLE IF EXISTS comments;

CREATE TABLE topics (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  topic_rating INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  user_comment TEXT,
  comment_rating INTEGER NOT NULL DEFAULT 0,
  topics_id INTEGER REFERENCES topics(id)
);
