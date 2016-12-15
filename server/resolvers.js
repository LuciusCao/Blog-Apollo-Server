// import { Author, Post, Comment } from './connectors';
import casual from 'casual';

const resolvers = {
  Query: {
    author(root, args) {
      return {
        username: () => casual.username,
        email: () => casual.email,
        createdAt: new Date().toString()
      };
    },
    post(root, args) {
      return {
        title: () => casual.title,
        category: 'design',
        content: casual.sentences(10),
        views: casual.integer(0,1000),
        createdAt: new Date().toString(),
        published: false
      };
    }
  },

};

export default resolvers;
