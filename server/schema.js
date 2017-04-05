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
    input: CategoryInput
  ): [Post]
}

input CategoryInput {
  category: String
}

input AuthorCreationInput {
  username: String!
  email: String!
  password: String!
}

input CommentInput {
  content: String!
}

input LikeInput {
  id: String!
}

type Mutation {
  createAuthor(
    input: AuthorCreationInput
  ): Author
  like(
    input: LikeInput
  )
}
schema {
  query: Query
  mutation: Mutation
}
`;

export default [typeDefinitions];
