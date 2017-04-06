import { Author, Post, Comment, Tag } from './connectors';
import Mongoose from 'mongoose';
import Bluebird from 'bluebird';

Mongoose.Promise = Bluebird;

const resolvers = {
  Query: {

  },
  Mutation: {
    createAuthor(root, args) {
      return Author.create({
        username: args.input.username,
        email: args.input.email,
        password: args.input.password,
      }).then(r => { return r }).catch(e => console.log(e));
    }
  }
};

export default resolvers;
