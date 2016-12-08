const typeDefinitions = `
type Author {
  id: String
  firstName: String
  lastName: String
  posts: [Post]
}
type Comment {
  id: String
  content: String
  author: Author
  post: Post
}
type Post {
  id: String
  title: String
  content: String
  views: Int
  author: Author
  comments: [Comment]
}
type Query {
  author(firstName: String, lastName: String): Author
}
schema {
  query: Query
}
`;

export default [typeDefinitions];
