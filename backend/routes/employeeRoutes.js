// routes/employeeRoutes.js
const express = require('express');
const { createEmployee, getEmployees, searchEmployees,getEmployeeById } = require('../controllers/employeeController');
const router = express.Router();

// Route for searching employees
router.post('/search', searchEmployees);
// Route to create a new employee
router.post('/create', createEmployee);

// Route to get all employees
router.get('/list', getEmployees);
// routes/employeeRoutes.js
router.get('/:id', getEmployeeById);





module.exports = router;
