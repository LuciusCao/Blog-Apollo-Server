import rethinkdbdash from 'rethinkdbdash';
import casual from 'casual';
import _ from 'lodash';

const r = rethinkdbdash();

const tables = [
  {db: 'blog', table: 'authors'},
  {db: 'blog', table: 'posts'},
  {db: 'blog', table: 'comments'},
  {db: 'blog', table: 'tags'}
]

function creatTable(db, table) {
    r.db(db).tableCreate(table).run()
      .then(() => console.log(`table: ${table} created on db: ${db}`))
      .catch(() => console.log(`table: ${table} existed on db: ${db}`))
}

_.forEach(tables, data => creatTable(data.db, data.table));

// export default r
