// models/employeeModel.js
const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    employeeId: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email',
        ],
    },
    phoneNumber: {
        type: String,
        required: false,
        match: [/^\d+$/, 'Please add a valid phone number'],
    },
    dateOfBirth: {
        type: Date,
        required: false,
    },
    department: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: false,
    },
    dateOfJoining: {
        type: Date,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;
