const db = require('../config/connection');

module.exports = {
  findVotes() {
    return db.many(`
      SELECT * 
      FROM   vdayvotes
      `);
  }
}