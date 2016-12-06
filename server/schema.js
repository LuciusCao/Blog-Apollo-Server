const typeDefinitions = `
type Author {
  firstName: String
  lastName: String
  posts: [Post]
}
type Comment {
  content: String
  author: Author
}
type Post {
  title: String
  content: String
  views: Int
  author: Author
  comments: [Comment]
}
type Query {
  author(firstName: String, lastName: String): Author
  post(title: String, author: String): Post
}
schema {
  query: Query
}
`;

export default [typeDefinitions];
