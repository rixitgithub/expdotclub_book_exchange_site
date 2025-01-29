const express = require('express');
const router = express.Router();
const { listBook, getBooks, findMatches } = require('../controllers/bookController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, listBook);
router.get('/', getBooks);
router.post('/matches', findMatches);

module.exports = router;
