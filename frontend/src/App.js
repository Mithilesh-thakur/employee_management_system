import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm';
import EmployeeSearch from './components/EmployeeSearch';
import EmployeeList from './components/EmployeeList';
import EmployeeDetails from './components/EmployeeDetails';
import { FaSearch } from "react-icons/fa";
import { MdCreateNewFolder } from "react-icons/md";
import { CiCircleList } from "react-icons/ci";

function App() {
    const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="App flex space-x-2 min-h-screen">
            {/* Sidebar */}
            <div className={`bg-rose-800 w-50 min-h-screen p-4 fixed lg:relative z-30 lg:z-auto ${isOpen ? 'block' : 'hidden'} lg:block`}>
                <div className="text-white text-lg font-bold mb-6">
                    <Link to="/">Employee Management</Link>
                </div>
                <ul className="space-y-4">
                    <li>
                        <Link to="/create" className="flex items-center text-white hover:text-gray-300">
                            <MdCreateNewFolder className="h-5 w-5 mr-2" />
                            Create Employee
                        </Link>
                    </li>
                    <li>
                        <Link to="/search" className="flex items-center text-white hover:text-gray-300">
                            <FaSearch className="h-5 w-5 mr-2" />
                            Search Employees
                        </Link>
                    </li>
                    <li>
                        <Link to="/employees" className="flex items-center text-white hover:text-gray-300">
                            <CiCircleList className="h-5 w-5 mr-2" />
                            Employee List
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Main content area */}
            <div className="flex-1 lg:ml-64">
                {/* Hamburger button for mobile view */}
                <div className="bg-rose-800 p-4 lg:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                            />
                        </svg>
                    </button>
                </div>

                {/* Main content */}
                <div className="p-6">
                    <Routes>
                        <Route path="/create" element={<EmployeeForm />} />
                        <Route path="/search" element={<EmployeeSearch />} />
                        <Route path="/employees" element={<EmployeeList />} />
                        <Route path="/employee/:id" element={<EmployeeDetails />} /> {/* Dynamic Route */}
                        <Route path="/" element={<h1 className='text-center text-2xl text-rose-800 font-semibold'>Welcome to the Employee Management System</h1>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
