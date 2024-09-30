import axios from 'axios';

const API_URL = 'http://localhost:3000/employees';

const createEmployee = async (employeeData) => {
    const response = await axios.post(`${API_URL}/create`, employeeData);
    return response.data;
};

const searchEmployees = async (criteria) => {
    try {
        console.log(criteria);
        const response = await axios.post(`${API_URL}/search`, criteria);
        console.log(response.data.employees);
        return response.data.employees; // Access the 'employees' array from the response data
    } catch (error) {
        console.error('Error searching employees:', error);
        throw error; // This will be caught in the component's catch block
    }
};

const getEmployeeById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

const getEmployees = async () => {
    const response = await axios.get(`${API_URL}/list`);
    return response.data;
};

export default {
    createEmployee,
    getEmployees,
    searchEmployees,
    getEmployeeById
};
