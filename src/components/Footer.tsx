import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"><a href="https://flowbite.com" className="hover:underline"></a>.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    <Link to="#" className='mr-4 hover:underline md:mr-6'>
                        About
                    </Link>

                    <Link to="#" className='mr-4 hover:underline md:mr-6'>
                        Contact
                    </Link>
                </ul>
            </footer>
        );
    }
}

export default Footer;