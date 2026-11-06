// Course Model for LMS
// Definition: Represents a course in the Learning Management System
// Used by: API routes, frontend course listings, enrollment functionality

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define course schema
const courseSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Course title is required'],
    trim: true,
    minlength: [3, 'Title must be at least 3 characters'],
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  instructor: {
    type: String,
    required: [true, 'Instructor name is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Course description is required'],
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  level: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    default: 'Beginner'
  },
  duration: {
    type: String,
    required: [true, 'Course duration is required'],
    match: [/^\d+(?:\.\d+)?\s*(hours?|mins?|weeks?|months?)$/, 'Please provide a valid duration']
  },
  studentsEnrolled: {
    type: Number,
    default: 0
  },
  lessons: [
    {
      title: { type: String, required: true },
      duration: { type: String },
      completed: { type: Boolean, default: false }
    }
  ],
  thumbnail: {
    type: String,
    default: 'default-thumbnail.jpg'
  },
  price: {
    type: Number,
    default: 0
  },
  isPublished: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create and export model
const Course = mongoose.model('Course', courseSchema);
module.exports = Course;

console.log('Course model definition created successfully');