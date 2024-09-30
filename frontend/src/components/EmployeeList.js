import React, { useEffect, useState } from 'react';
import employeeService from '../services/employeeService';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch employees from the backend when the component mounts
    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const data = await employeeService.getEmployees(); // Fetching employees
                setEmployees(data);
            } catch (error) {
                console.error('Error fetching employees:', error);
                alert('Failed to load employee data');
            } finally {
                setLoading(false);
            }
        };

        fetchEmployees();
    }, []);

    if (loading) {
        return <div className="text-center py-6">Loading...</div>;
    }

    return (
        <div className="max-w-8xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-rose-800 text-center mb-6">Employee List</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {employees.map((employee) => (
                    <div 
                        key={employee._id} 
                        className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {employee.firstName} {employee.lastName}
                            </h3>
                            <p className="text-gray-600"><strong>ID:</strong> {employee.employeeId}</p>
                            <p className="text-gray-600"><strong>Email:</strong> {employee.email}</p>
                            <p className="text-gray-600"><strong>Department:</strong> {employee.department}</p>
                            <p className="text-gray-600"><strong>Position:</strong> {employee.position}</p>
                            <p className="text-gray-600"><strong>Salary:</strong> ${employee.salary}</p>
                        </div>
                        <p className="text-gray-600 mt-4">
                            <strong>Date of Joining:</strong> {new Date(employee.dateOfJoining).toLocaleDateString()}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EmployeeList;
