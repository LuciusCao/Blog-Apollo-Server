const typeDefinitions = `
type Author {
  id: ID
  username: String
  email: String
  createdAt: String
  updatedAt: String
  posts: [Post]
  comments: [Comment]
}

type Comment {
  id: ID
  content: String
  author: Author
  post: Post
  createdAt: String
  commentOn: Comment
  commentedBy: [Comment]
}

type Post {
  id: ID
  title: String
  category: Category
  description: String
  content: String
  views: Int
  likes: Int
  createdAt: String
  updatedAt: String
  published: Boolean
  author: Author
  tags: [Tag]
  comments: [Comment]
}

type Tag {
  id: ID
  content: String
}

enum Category {
  DESIGN
  TECHNOLOGY
  OTHERS
}

type Query {
  getPostsByCategory(
    category: String
  ): [Post]
}

schema {
  query: Query
}
`;

export default [typeDefinitions];
