import { Author, Post, Comment } from './connectors';
import _ from 'lodash';

const resolvers = {
  Query: {
    author(root, args) {
      return Author.findOne({ firstName: args.firstName, lastName: args.lastName })
    },
  },
  Author: {
    posts(author) {
      return Post.find({ author: `${author.firstName} ${author.lastName}` }, (e, r) => {
      });
    },
  },
  Post: {
    author(post) {
      return Post.findOne({ title: post.title });
    },
    comments(post) {
      return Comment.find({ post: post.title }, (e, r) => {});
    },
  },
};

export default resolvers;
