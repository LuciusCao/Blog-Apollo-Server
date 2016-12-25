import { Author, Post, Comment } from './connectors';
import Mongoose from 'mongoose';

const resolvers = {
  Query: {
    getCurrentAuthor(root, args) {
      return Author.findOne({email: args.email}, (e, r) => {
        if (e) {
          throw new Error('getCurrentAuthor failed');
        } else {
          console.log('getCurrentAuthor succeeded');
        }
      });
    },
    getOneAuthor(root, args) {
      if (!args.email && !args.username) {
        throw new Error('getOneAuthor: You must specify either email or username');
      } else if (args.email && args.username) {
        throw new Error('getOneAuthor: You can only specify either email or username');
      } else if (args.email) {
        return Author.findOne({email: args.email}, (e, r) => {
          if (e) {
            throw new Error('getOneAuthor failed with args.email');
          } else {
            console.log('getOneAuthor succeeded with args.emaal');
          }
        });
      } else if (args.username) {
        return Author.findOne({username: args.username}, (e, r) => {
          if (e) {
            throw new Error('getOneAuthor failed with args.username');
          } else {
            console.log('getOneAuthor succeeded with args.username');
          }
        });
      }
    },
    getAuthors(root, args) {
      if (args.username) {
        return Author.find({username: args.username}, (e, r) => {
          if (e) {
            throw new Error('getAuthors failed with args.username');
          } else {
            console.log('getAuthors succeeded with args.username');
          }
        })
      } else {
        return Author.find({}, (e, r) => {
          if (e) {
            throw new Error('getAuthors failed with no args.username');
          } else {
            console.log('getAuthors succeeded with no args.username');
          }
        })
      }
    },
    getPosts(root, args) {
      if (args.id) {
        return Post.
          find({author: Mongoose.Types.ObjectId(args.id)})
      }
    }
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
