import { Author, Post, Comment } from './connectors';
import casual from 'casual';
import Mongoose from 'mongoose';

const resolvers = {
  Query: {
    getCurrentAuthor(root, args) {
      return Author.findOne({email: args.email}, (e, r) => {
        if (e) {
          throw new Error('getCurrentAuthor failed');
        } else {
          console.log('getCurrentAuthor failed');
        }
      });
    },
  },
  Mutation: {
    createAuthor(root, args) {
      return Author.create({
        username: args.username,
        email: args.email,
        posts: [],
        comments: []
      });
    }
  },
  Author: {
    posts(author) {
      return Post.find({author: Mongoose.Types.ObjectId(author.id)}, (e, r) => {
        if (e) {
          throw new Error('hmm');
        } else {
          console.log('ahahaha');
        }
      })
    }
  }
};

export default resolvers;
