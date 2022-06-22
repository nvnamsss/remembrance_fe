import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

class Header extends React.Component {
    render() {
        return (
            <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
                <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="/" className="mr-4 hover:underline md:mr-6 "><strong>Gift</strong></a>
                    </li>
                    <li>
                        <a href="/remembrance" className="mr-4 hover:underline md:mr-6"><strong>Remembrance</strong></a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6"><strong>Trade</strong></a>
                    </li>
                </ul>
            </footer>
        );
    }
}

export default Header;