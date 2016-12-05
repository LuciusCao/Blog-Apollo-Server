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
});
const Post = Mongoose.model('posts', PostSchema);

// create seed data
Author.create({
  firstName: 'Lucius',
  lastName: 'Cao',
  posts: ['a post by lulu']
});

Post.create({
  title: 'a post by lulu',
  content: 'some content',
  views: 100,
  author: 'Lucius'
});

export { Author, Post };
