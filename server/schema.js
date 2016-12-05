const typeDefinitions = `
type Author {
  id: Int
  firstName: String
  lastName: String
  posts: [Post]
}
type Comment {
  id: Int
  content: String
  author: Author
}
type Post {
  id: Int
  title: String
  content: String
  views: Int
  author: Author
  comment: [Comment]
}
type Query {
  author(firstName: String, lastName: String): Author
  getFortuneCookie: String
}
schema {
  query: Query
}
`;

export default [typeDefinitions];
