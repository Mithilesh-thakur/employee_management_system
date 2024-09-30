import React, { useState } from 'react';
import employeeService from '../services/employeeService';

const EmployeeForm = () => {
    const [formData, setFormData] = useState({
        employeeId: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        dateOfBirth: '',
        department: '',
        position: '',
        dateOfJoining: '',
        salary: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await employeeService.createEmployee(formData);
            alert('Employee added successfully!');
            setFormData({
                employeeId: '',
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                dateOfBirth: '',
                department: '',
                position: '',
                dateOfJoining: '',
                salary: '',
            });
        } catch (error) {
            console.error(error);
            alert('Failed to add employee');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg space-y-6">
            <h2 className="text-2xl font-semibold text-rose-800 text-center">Employee Registration Form</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700">Employee ID</label>
                    <input 
                        type="text" 
                        name="employeeId" 
                        value={formData.employeeId} 
                        onChange={handleChange} 
                        required 
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:border-rose-800"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">First Name</label>
                    <input 
                        type="text" 
                        name="firstName" 
                        value={formData.firstName} 
                        onChange={handleChange} 
                        required 
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:border-rose-800"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Last Name</label>
                    <input 
                        type="text" 
                        name="lastName" 
                        value={formData.lastName} 
                        onChange={handleChange} 
                        required 
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:border-rose-800"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:border-rose-800"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Phone Number</label>
                    <input 
                        type="text" 
                        name="phoneNumber" 
                        value={formData.phoneNumber} 
                        onChange={handleChange} 
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:border-rose-800"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Date of Birth</label>
                    <input 
                        type="date" 
                        name="dateOfBirth" 
                        value={formData.dateOfBirth} 
                        onChange={handleChange} 
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:border-rose-800"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Department</label>
                    <select 
                        name="department" 
                        value={formData.department} 
                        onChange={handleChange} 
                        required 
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:border-rose-800"
                    >
                        <option value="IT">IT</option>
                        <option value="HR">HR</option>
                        <option value="Finance">Finance</option>
                        <option value="Operations">Graphic Desiner</option>
                        <option value="Operations">Software Developer</option>
                        <option value="Operations">Web Developer</option>
                        <option value="Operations">Data Analitic</option>
                        <option value="Operations">Operations</option>
                    </select>
                </div>
                <div>
                    <label className="block text-gray-700">Position</label>
                    <input 
                        type="text" 
                        name="position" 
                        value={formData.position} 
                        onChange={handleChange} 
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:border-rose-800"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Date of Joining</label>
                    <input 
                        type="date" 
                        name="dateOfJoining" 
                        value={formData.dateOfJoining} 
                        onChange={handleChange} 
                        required 
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:border-rose-800"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Salary</label>
                    <input 
                        type="number" 
                        name="salary" 
                        value={formData.salary} 
                        onChange={handleChange} 
                        required 
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:border-rose-800"
                    />
                </div>
            </div>
            <button 
                type="submit" 
                className="w-full py-2 px-4 bg-rose-800 text-white font-semibold rounded-md shadow-md hover:bg-rose-700 focus:outline-none focus:ring focus:border-rose-900"
            >
                Submit
            </button>
        </form>
    );
};

export default EmployeeForm;
