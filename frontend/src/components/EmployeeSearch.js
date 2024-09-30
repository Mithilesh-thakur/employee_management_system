import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import employeeService from '../services/employeeService';

const EmployeeSearch = () => {
    const [searchCriteria, setSearchCriteria] = useState({
        employeeId: '',
        department: ''
    });
    const [results, setResults] = useState([]);
    const navigate = useNavigate();

    // Handle change in search input fields
    const handleChange = (e) => {
        setSearchCriteria({ ...searchCriteria, [e.target.name]: e.target.value });
    };

    // Perform search based on criteria
    const handleSearch = async () => {
        try {
            const employees = await employeeService.searchEmployees(searchCriteria);
            setResults(employees);
        } catch (error) {
            console.error('Error during search:', error);
            alert('Failed to search employees. Please check the console for details.');
        }
    };

    // Clear search criteria and results
    const clearForm = () => {
        setSearchCriteria({
            employeeId: '',
            department: ''
        });
        setResults([]); // Clear results as well
    };

    // Navigate to employee details page
    const handleEmployeeClick = (id) => {
        navigate(`/employee/${id}`);
    };

    return (
        <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-rose-800 mb-6 text-center">Search Employees</h2>
            
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Employee ID</label>
                <input
                    type="text"
                    name="employeeId"
                    value={searchCriteria.employeeId}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-rose-800 focus:border-rose-800"
                    placeholder="Enter Employee ID"
                />
            </div>
            
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Department</label>
                <select
                    name="department"
                    value={searchCriteria.department}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-rose-800 focus:border-rose-800"
                >
                    <option value="">--Select Department--</option>
                    <option value="IT">IT</option>
                    <option value="HR">HR</option>
                    <option value="Finance">Finance</option>
                    <option value="Graphic Designer">Graphic Designer</option>
                    <option value="Software Developer">Software Developer</option>
                    <option value="Web Developer">Web Developer</option>
                    <option value="Data Analyst">Data Analyst</option>
                    <option value="Operations">Operations</option>
                </select>
            </div>
            
            <div className="flex space-x-4 mb-6">
                <button
                    onClick={handleSearch}
                    className="flex-1 bg-rose-800 text-white font-semibold px-4 py-2 rounded-md shadow-md hover:bg-rose-900 transition"
                >
                    Search
                </button>
                <button
                    onClick={clearForm}
                    className="flex-1 bg-gray-400 text-white font-semibold px-4 py-2 rounded-md shadow-md hover:bg-gray-500 transition"
                >
                    Clear
                </button>
            </div>

            <h3 className="text-lg font-semibold text-gray-700 mt-6">Results</h3>
            {results.length === 0 ? (
                <p className="text-gray-500">No employees found.</p>
            ) : (
                <ul className="space-y-4 mt-4">
                    {results.map((employee) => (
                        <li
                            key={employee._id}
                            onClick={() => handleEmployeeClick(employee._id)}
                            className="cursor-pointer bg-gray-100 p-4 hover:bg-gray-200 rounded-md shadow transition"
                        >
                            <p className="text-sm"><strong>ID:</strong> {employee.employeeId}</p>
                            <p className="text-sm"><strong>Name:</strong> {employee.firstName} {employee.lastName}</p>
                            <p className="text-sm"><strong>Department:</strong> {employee.department}</p>
                            <p className="text-sm"><strong>Date of Joining:</strong> {new Date(employee.dateOfJoining).toLocaleDateString()}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default EmployeeSearch;
