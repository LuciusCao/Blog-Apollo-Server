import Mongoose from 'mongoose';
import casual from 'casual';

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
  views: Number,
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

// const author1 = new Author({
//   name: casual.name,
//   email: casual.email,
//   posts: [],
//   comments: [],
// });
// author1.save((e) => {
//   if (e) {
//     throw e;
//   } else {
//     console.log('author1 created');
//     const post1 = new Post({
//       title: casual.title,
//       category: 'design',
//       content: casual.sentences(100),
//       views: Math.floor(Math.random() * 100),
//       author: author1._id,
//       comments: [],
//     });
//     post1.save((e) => {
//       if (e) {
//         throw e;
//       } else {
//         console.log('post 1 created');
//       };
//     });
//   };
// });

// Author.count({}, (e, r) => {
//   if (e) {
//     console.log('Error');
//   } else if (r == 0) {
//     Author.create({
//       firstName: 'Lucius',
//       lastName: 'Cao',
//       posts: ['a post by lulu'],
//     });
//     Author.create({
//       firstName: 'Ulleo',
//       lastName: 'Wang',
//       posts: ['fancy article', 'another fancy article'],
//     });
//     console.log('2 authors created');
//   } else {
//     console.log('authors already existed');
//   }
// });
//
// Post.count({}, (e, r) => {
//   if (e) {
//     console.log('Error');
//   } else if (r == 0) {
//     Post.create({
//       title: 'a post by lulu',
//       content: 'some content',
//       views: 100,
//       author: 'Lucius Cao',
//       comments: ['this is the first comment', 'this is the second comment'],
//     });
//     Post.create({
//       title: 'fancy article',
//       content: 'some content here',
//       views: 100,
//       author: 'Ulleo Wang',
//       comments: ['this is a comment'],
//     });
//     Post.create({
//       title: 'another fancy article',
//       content: 'some content here',
//       views: 100,
//       author: 'Ulleo Wang',
//       comments: ['this is a comment'],
//     });
//     console.log('3 posts created');
//   } else {
//     console.log('posts already existed');
//   }
// });
//
// Comment.count({}, (e, r) => {
//   if (e) {
//     console.log('Error');
//   } else if (r == 0) {
//     Comment.create({
//       post: 'a post by lulu',
//       content: 'this is the first comment',
//       author: 'Lucius Cao',
//     });
//     Comment.create({
//       post: 'a post by lulu',
//       content: 'this is the second comment',
//       author: 'Ulleo Wang',
//     });
//     Comment.create({
//       post: 'fancy article',
//       content: 'this is a comment for fancy article',
//       author: 'Lucius Cao',
//     });
//     Comment.create({
//       post: 'another fancy article',
//       content: 'this is a comment for another fancy article',
//       author: 'Lucius Cao',
//     });
//     console.log('4 comments created');
//   } else {
//     console.log('comments already existed')
//   }
// });

export { Author, Post, Comment };
