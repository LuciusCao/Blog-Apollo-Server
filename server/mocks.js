import casual from 'casual';
import { MockList } from 'graphql-tools';

function generatePost() {
  return {
    id: casual.uuid,
    title: casual.title,
    description: casual.description,
    content: () => casual.sentences(5),
    views: () => casual.integer(100,200),
    likes: () => casual.integer(0,100),
    createdAt: () => new Date().toString(),
    updatedAt: () => new Date().toString(),
    published: false,
  }
}

function generateAuthor() {
  return {
    id: casual.uuid,
    username: casual.username,
    email: casual.email,
    createdAt: () => new Date().toString(),
    updatedAt: () => new Date().toString(),
  }
}

function generateComment() {
  return {
    id: casual.uuid,
    content: () => casual.sentences(2),
  }
}

function generateTag() {
  return {
    id: casual.uuid,
    content: () => casual.word,
  }
}

const mocks = {
  Query: () => ({
    getPostsByCategory: (root, args) => new MockList([2,4], generatePost),
  }),
  Author: () => generateAuthor(),
  Post: () => generatePost(),
  Comment: () => generateComment(),
  Tag: () => generateTag(),
};

export default mocks
