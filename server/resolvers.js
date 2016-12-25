import { Author, Post, Comment } from './connectors';
import casual from 'casual';
import Mongoose from 'mongoose';

const resolvers = {
  Query: {
    getCurrentAuthor(root, args) {
      return Author.findOne({ email: args.email }, (e, r) => {
        if (e) {
          throw new Error('error when get current author');
        } else if (r) {
          console.log(r.id);
        } else {
          throw new Error('author does not exist')
        }
      });
    },
    getMyPosts(root, args) {
      return Post.find({ author: Mongoose.Types.ObjectId(context.id) }, (e, r) => {
        if (e) {
          throw new Error('error when get my posts');
        } else if (r.lenth != 0) {
          console.log(r);
        } else {
          throw new Error('no posts');
        }
      });
    },
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
    },
    createPost(root, args, context) {
      return Post.create({
        title: args.title,
        category: args.category,
        content: args.content,
        author: Mongoose.Types.ObjectId(context.authorId),
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
