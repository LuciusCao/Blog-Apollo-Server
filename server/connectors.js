import Mongoose from 'mongoose';

const mongo = Mongoose.connect('mongodb://localhost/blogs');

const AuthorSchema = Mongoose.Schema({
  firstName: String,
  lastName: String,
  posts: [String],
});
const Author = Mongoose.model('authors', AuthorSchema);

const PostSchema = Mongoose.Schema({
  title: String,
  content: String,
  views: Number,
  author: String,
  comments: [String],
});
const Post = Mongoose.model('posts', PostSchema);

const CommentSchema = Mongoose.Schema({
  post: String,
  content: String,
  author: String,
});
const Comment = Mongoose.model('comments', CommentSchema);

// create seed data
Author.count({}, (e, r) => {
  if (e) {
    console.log('Error');
  } else if (r == 0) {
    Author.create({
      firstName: 'Lucius',
      lastName: 'Cao',
      posts: ['a post by lulu'],
    });
    Author.create({
      firstName: 'Ulleo',
      lastName: 'Wang',
      posts: ['fancy article', 'another fancy article'],
    });
    console.log('2 authors created');
  } else {
    console.log('authors already existed');
  }
});

Post.count({}, (e, r) => {
  if (e) {
    console.log('Error');
  } else if (r == 0) {
    Post.create({
      title: 'a post by lulu',
      content: 'some content',
      views: 100,
      author: 'Lucius Cao',
      comments: ['this is the first comment', 'this is the second comment'],
    });
    Post.create({
      title: 'fancy article',
      content: 'some content here',
      views: 100,
      author: 'Ulleo Wang',
      comments: ['this is a comment'],
    });
    Post.create({
      title: 'another fancy article',
      content: 'some content here',
      views: 100,
      author: 'Ulleo Wang',
      comments: ['this is a comment'],
    });
    console.log('3 posts created');
  } else {
    console.log('posts already existed');
  }
});

Comment.count({}, (e, r) => {
  if (e) {
    console.log('Error');
  } else if (r == 0) {
    Comment.create({
      post: 'a post by lulu',
      content: 'this is the first comment',
      author: 'Lucius Cao',
    });
    Comment.create({
      post: 'a post by lulu',
      content: 'this is the second comment',
      author: 'Ulleo Wang',
    });
    Comment.create({
      post: 'fancy article',
      content: 'this is a comment for fancy article',
      author: 'Lucius Cao',
    });
    Comment.create({
      post: 'another fancy article',
      content: 'this is a comment for another fancy article',
      author: 'Lucius Cao',
    });
    console.log('4 comments created');
  } else {
    console.log('comments already existed')
  }
});

export { Author, Post, Comment };
