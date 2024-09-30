const Employee = require('../models/employeeModel');

// Create a new employee
const createEmployee = async (req, res) => {
    try {
        const employee = new Employee(req.body);
        const savedEmployee = await employee.save();
        res.status(201).json({ message: 'Employee created successfully', savedEmployee });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all employees
const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching employees', error });
    }
};

// Search employees
const searchEmployees = async (req, res) => {
    try {
        const { employeeId, department } = req.body;
        console.log(req.body);

        // Fetch employees based on the query
        const employees = await Employee.find({employeeId, department});

        // Return success message with the employees data
        res.status(200).json({
            message: 'Search successful',
            employees: employees
        });
    } catch (error) {
        res.status(500).json({ message: 'Error searching employees', error });
    }
};






// Get employee by ID
const getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching employee', error });
    }
};

module.exports = { createEmployee, getEmployees, searchEmployees, getEmployeeById };
