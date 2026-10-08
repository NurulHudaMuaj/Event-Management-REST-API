const express = require('express');
const router = express.Router();

// কন্ট্রোলার ইমপোর্ট (পাথ: controller/
// eventController)
const {
  getAllEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../controller/eventController');

// মিডলওয়্যার ইমপোর্ট (পাথ: middleware/auth)
const { protect } = require('../middleware/auth');

// রাউটস
router.get('/', getAllEvents);
router.post('/', protect, createEvent);

router.get('/:id', getEvent);
router.put('/:id', protect, updateEvent);
router.delete('/:id', protect, deleteEvent);

module.exports = router;