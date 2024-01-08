const User = require('./User');
const Post = require('./BlogPost');
const Comment = require('./Comment');

BlogPost.belongsToMany(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

BlogPost.hasMany(Comment, {
    foreignKey: 'BlogPost_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

  module.exports = {
    User,
    Comment,
    BlogPost
  };