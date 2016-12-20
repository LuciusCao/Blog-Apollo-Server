import Mongoose from 'mongoose';
import casual from 'casual';
import _ from 'lodash';

Mongoose.connect('mongodb://localhost/blogs');

const ObjectId = Mongoose.Schema.ObjectId

const AuthorSchema = Mongoose.Schema({
  username: String,
  email: {
    type: String,
    unique: true
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  posts: [{
    type: ObjectId,
    ref: 'posts'
  }],
  comments: [{
    type: ObjectId,
    ref: 'comments'
  }]
});
const Author = Mongoose.model('authors', AuthorSchema);

const PostSchema = Mongoose.Schema({
  title: String,
  category: {
    type: String,
    enum: ['design', 'technology', 'others'],
    lowercase: true
  },
  content: String,
  views: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  published: {
    type: Boolean,
    default: false
  },
  author: {
    type: ObjectId,
    ref: 'authors'
  },
  comments: [{
    type: ObjectId,
    ref: 'comments'
  }]
});
const Post = Mongoose.model('posts', PostSchema);

const CommentSchema = Mongoose.Schema({
  post: {
    type: ObjectId,
    ref: 'posts'
  },
  content: String,
  author: {
    type: ObjectId,
    ref: 'authors'
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  commentOn: {
    type: ObjectId,
    ref: 'comments'
  }
});
const Comment = Mongoose.model('comments', CommentSchema);

// create seed data
casual.seed(0);
Author.count({}, (e, r) => {
  if (e) {
    throw e;
  } else if (r == 0) {
    _.times(5, () => {
      return Author.create({
        username: casual.username,
        email: casual.email,
        posts: [],
        comments: []
      }).then((author) => {
        return Post.create({
          title: casual.title,
          category: ['design','technology','others'][casual.integer(0,2)],
          content: casual.sentences(50),
          views: casual.integer(0,1000),
          author: author.id,
          comments: []
        }).then((post) => {
          return Author.update(
            {_id: post.author},
            {$push: {posts: post._id}}
          );
        })
      });
    });
    console.log('seed data created');
  } else {
    console.log('already existed');
  }
})

export { Author, Post, Comment };
