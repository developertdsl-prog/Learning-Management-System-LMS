// Course API Routes
// Definition: RESTful endpoints for course management
// Methods: GET (list courses), POST (create course)
// Used by: Frontend course listing, instructor dashboard, admin panel

const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// @route   GET api/courses
// @desc    Get all courses
// @access  Public
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.json(courses);
  } catch (err) {
    console.error('Error fetching courses:', err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/courses
// @desc    Create a new course
// @access  Private (instructor/admin)
router.post('/', async (req, res) => {
  try {
    const { title, instructor, description, level, duration } = req.body;

    // Simple validation
    if (!title || !instructor) {
      return res.status(400).json({ errors: [{ msg: 'Please include title and instructor' }] });
    }

    const newCourse = new Course({
      title,
      instructor,
      description: description || '',
      level: level || 'Beginner',
      duration,
      studentsEnrolled: 0
    });

    const course = await newCourse.save();
    res.json(course);
  } catch (err) {
    console.error('Error creating course:', err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

console.log('Course API routes created successfully');