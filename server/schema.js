const typeDefinitions = `
type Author {
  _id: ID
  username: String
  email: String
  createdAt: String
  updatedAt: String
  posts: [Post]
  comments: [Comment]
}

type Comment {
  _id: ID
  content: String
  author: Author
  post: Post
  createdAt: String
  commentOn: Comment
  commentedBy: [Comment]
}

type Post {
  _id: ID
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
  _id: ID
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

type Mutation {
  createAuthor(
    input: AuthorInfo
  ): Author
}

input AuthorInfo {
  username: String!
  email: String!
  password: String!
}

schema {
  query: Query
  mutation: Mutation
}
`;

export default [typeDefinitions];
