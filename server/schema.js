const typeDefinitions = `
type Author {
  id: String
  username: String
  email: String
  createdAt: String
  updatedAt: String
  posts: [Post]
  comments: [Comment]
}

type Comment {
  id: String
  content: String
  author: Author
  post: Post
  createdAt: String
  commentOn: Comment
  commentedBy: [Comment]
}

type Post {
  id: String
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
  id: String
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
