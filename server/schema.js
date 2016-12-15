const typeDefinitions = `
type Author {
  id: String
  username: String
  email: String
  createdAt: String
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
}
type Post {
  id: String
  title: String
  category: Category
  content: String
  views: Int
  createdAt: String
  published: Boolean
  author: Author
  comments: [Comment]
}
enum Category {
  design
  technology
  others
}
type Query {
  author(name: String): Author
  post(category: Category): Post
}
type Mutation {
  createAuthor(
    username: String!
    email: String!
  ): Author
}
schema {
  query: Query
  mutation: Mutation
}
`;

export default [typeDefinitions];
