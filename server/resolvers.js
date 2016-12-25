import { Author, Post, Comment } from './connectors';
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
      console.log(author);
      return [
        { title: 'this is a post' },
        { title: 'this is another post' }
      ];
    },
    comments(author) {
      console.log(author);
      return [
        { content: 'comment 1' },
        { content: 'comment 2' },
        { content: 'comment 3' }
      ]
    }
  }
};

export default resolvers;
