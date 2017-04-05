import casual from 'casual';
import { MockList } from 'graphql-tools';

function generatePost() {
  return {
    id: casual.uuid,
    title: casual.title,
    description: casual.description,
    content: () => causal.sentence(5),
    views: () => causal.integer(100,200),
    likes: () => casual.integer(0,100),
    createdAt: () => casual.date(format = 'YYYY-MM-DD'),
    updatedAt: () => casual.date(format = 'YYYY-MM-DD'),
    published: false,
  }
}

function generateAuthor() {
  return {
    id: casual.uuid,
    username: casual.username,
    email: casual.email,
    createdAt: () => casual.date(format = 'YYYY-MM-DD'),
    updatedAt: () => casual.date(format = 'YYYY-MM-DD'),
  }
}

function generateComment() {
  return {
    id: casual.uuid,
    content: () => casual.sentence(2),
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
    getPostsByCategory: (root, args) => new MockList([2,20], generatePost),
    Author: generateAuthor(),
    Post: generatePost(),
    Comment: generateComment(),
    Tag: generateTag(),
  })
};

export default mocks
