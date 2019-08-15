module.exports = {
  showVotes(req, res) {
    // let votes = res.locals.votes
    // res.json(votes);
    res.json({
      message: 'Reached Votes'
    });
    // res.render('public/directory', {users: users})
  },

  showHomepage(req, res) {
    console.log('From Views Controller, rendered showHomepage()')
    // res.render('home/index');
    res.json({
      message: 'Reached Homepage'
    })
  }
}