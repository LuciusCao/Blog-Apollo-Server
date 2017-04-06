import Mongoose from 'Mongoose';
import casual from 'casual';
import _ from 'lodash';

const Schema = Mongoose.Schema;
const mongo = Mongoose.connect('mongodb://localhost/blog');

const authorSchema = new Schema({
  username: String,
  password: {
    type: String,
    required: true
  },
  email: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  posts: [Schema.Types.ObjectId],
  comments: [Schema.Types.ObjectId]
});
const Author = Mongoose.model('Author', authorSchema);

const commentSchema = new Schema({
  content: {
    type: String,
    trim: true,
    required: true
  },
  author: Schema.Types.ObjectId,
  post: Schema.Types.ObjectId,
  createdAt: {
    type: Date,
    default: Date.now
  },
  commentOn: Schema.Types.ObjectId,
})
const Comment = Mongoose.model('Comment', commentSchema);

const postSchema = new Schema({
  title: String,
  category: {
    type: String,
    enum: ['TECHNOLOGY', 'DESIGN', 'OTHERS']
  },
  description: {
    type: String,
    trim: true
  },
  content: {
    type: String,
    trim: true,
    required: true
  },
  views: {
    type: Number,
    default: 0,
    required: true
  },
  likes: {
    type: Number,
    default: 0,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  published: {
    type: Boolean,
    default: false,
    required: true
  },
  author: Schema.Types.ObjectId,
  tags: [Schema.Types.ObjectId],
  comments: [Schema.Types.ObjectId]
});
const Post = Mongoose.model('Post', postSchema);

const tagSchema = new Schema({
  content: {
    type: String,
    required: true,
  }
});
const Tag = Mongoose.model('Tag', tagSchema);

export { Author, Post, Comment, Tag };
