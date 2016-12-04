import Mongoose from 'mongoose';
import casual from 'casual';
import _ from 'lodash';

const mongo = Mongoose.connect('mongodb://localhost/blogs');

const AuthorSchema = Mongoose.Schema({
  authorId: Mongoose.Schema.Types.ObjectId,
  firstName: String,
  lastName: String,
  posts: [Mongoose.Schema.Types.ObjectId],
});
const Author = Mongoose.model('authors', AuthorSchema);

const PostSchema = Mongoose.Schema({
  postId: Mongoose.Schema.Types.ObjectId,
  title: String,
  content: String,
  views: Number,
  author: Mongoose.Schema.Types.ObjectId,
});
const Post = Mongoose.model('posts', PostSchema);

casual.seed(0);

_.times(10, () => {
  return Author.update(
    { authorId: Mongoose.Types.ObjectId() },
    { firstName: casual.first_name },
    { lastName: casual.last_name },
    { posts: _.times(casual.integer(0, 3), () => {
      return Mongoose.Types.ObjectId();
    })},
    { upsert: true }
  ).then((author) => {
    return Post.update(
      { postId: Mongoose.Types.ObjectId() },
      { title: casual.word(3) + author.lastName },
      { content : casual.sentences(50) },
      { views: casual.integer(0, 100) },
      { author: author.authorId },
      { upsert: true });
  });
});
console.log('new documents created');

// if (!Author.find()) {
//   _.times(10, () => {
//     return Author.update(
//       { authorId: Mongoose.Types.ObjectId() },
//       { firstName: casual.first_name },
//       { lastName: casual.last_name },
//       { posts: _.times(casual.integer(0, 3), () => {
//         return Mongoose.Types.ObjectId();
//       })},
//       { upsert: true }
//     ).then((author) => {
//       return Post.update(
//         { postId: Mongoose.Types.ObjectId() },
//         { title: casual.word(3) + author.lastName },
//         { content : casual.sentences(50) },
//         { views: casual.integer(0, 100) },
//         { author: author.authorId },
//         { upsert: true });
//     });
//   })
//   console.log('new documents created');
// } else {
//   console.log('already have authors');
// }

export { Author, Post };
