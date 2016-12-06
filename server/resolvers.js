import { Author, Post, Comment } from './connectors';

const resolvers = {
  Query: {
    author(root, args){
      return Author.findOne({ firstName: args.firstName, lastName: args.lastName }).then((author) => ({
        firstName: author.firstName,
        lastName: author.lastName,
        posts: author.posts,
      }));
    },
  },
  Author: {
    posts(author){
      return [
        { id: 1, title: 'A post', text: 'Some text', views: 2},
        { id: 2, title: 'Another post', text: 'Some other text', views: 200}
      ];
    },
  },
  Post: {
    author(post){
      return { id: 1, firstName: 'Hello', lastName: 'World' };
    },
  },
  Comment: {

  },
};

export default resolvers;
