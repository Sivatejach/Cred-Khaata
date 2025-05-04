import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <nav className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center shadow-md">
      <Link to="/dashboard" className="text-xl font-bold">
        CrediKhaata
      </Link>
      <ul className="flex space-x-6 items-center">
        <li>
          <Link to="/dashboard" className="hover:underline">
            Home
          </Link>
        </li>
        <li className="relative">
          <button onClick={toggleDropdown} className="hover:underline focus:outline-none">
            Forms ▾
          </button>
          {isDropdownOpen && (
            <ul className="absolute mt-2 bg-white text-black rounded shadow z-10 min-w-[180px]">
              <li>
                <Link to="/add-customer" className="block px-4 py-2 hover:bg-blue-100">
                  Add Customer
                </Link>
              </li>
              <li>
                <Link to="/add-loan" className="block px-4 py-2 hover:bg-blue-100">
                  Add Loan
                </Link>
              </li>
              <li>
                <Link to="/record-repayment" className="block px-4 py-2 hover:bg-blue-100">
                  Record Repayment
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/help" className="hover:underline">
            Help
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
