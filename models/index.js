const User = require('./User');
const Post = require('./BlogPost');
const Comment = require('./Comment');

User.hasMany(BlogPost,{
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

BlogPost.belongsToMany(User, {
    foreignKey: 'user_id',
});

BlogPost.hasMany(Comment, {
    foreignKey: 'BlogPost_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(BlogPost, {
    foreignKey: "BlogPost_id"
})

module.exports = {
  User,
  BlogPost,
  Comment
};