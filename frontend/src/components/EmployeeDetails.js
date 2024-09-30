import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import employeeService from '../services/employeeService';

const EmployeeDetails = () => {
    const { id } = useParams(); // Get employee ID from URL
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        const fetchEmployeeDetails = async () => {
            try {
                const data = await employeeService.getEmployeeById(id); // Fetch employee by ID
                setEmployee(data);
            } catch (error) {
                console.error('Failed to fetch employee details:', error);
                alert('Error fetching employee details');
            }
        };

        fetchEmployeeDetails();
    }, [id]);

    if (!employee) {
        return <div>Loading employee details...</div>;
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="max-w-sm w-full bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                <h2 className="text-2xl font-bold text-rose-800 mb-4 text-center">Employee Details</h2>
                <div className="space-y-2">
                    <p><strong className="text-gray-600">ID:</strong> {employee.employeeId}</p>
                    <p><strong className="text-gray-600">Name:</strong> {employee.firstName} {employee.lastName}</p>
                    <p><strong className="text-gray-600">Email:</strong> {employee.email}</p>
                    <p><strong className="text-gray-600">Phone:</strong> {employee.phoneNumber}</p>
                    <p><strong className="text-gray-600">Department:</strong> {employee.department}</p>
                    <p><strong className="text-gray-600">Position:</strong> {employee.position}</p>
                    <p><strong className="text-gray-600">Date of Joining:</strong> {new Date(employee.dateOfJoining).toLocaleDateString()}</p>
                    <p><strong className="text-gray-600">Salary:</strong> ${employee.salary}</p>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDetails;
