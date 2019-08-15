const express         = require('express');
const router          = express.Router();
const controller      = require('../controllers/controller');
const viewsController = require('../controllers/viewsController');


router.route('/votes')
.get(controller.getVotes, viewsController.showVotes)
// .post(controller.addVote);

router.route('/')
.get(viewsController.showHomepage);

module.exports = router;