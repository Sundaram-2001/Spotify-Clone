import React from "react";
import './temp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSearch } from '@fortawesome/free-solid-svg-icons';

export default function temp() {
    return (
        <div className="main-container">
            <div className="left-nav">
                <div className="first-section">
                    <ul>
                        <li className="nav-item">
                            <FontAwesomeIcon icon={faHouse} inverse />
                            <h3>Home</h3>
                        </li>
                        <li className="nav-item">
                            <FontAwesomeIcon icon={faSearch} inverse />
                            <h3>Search</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
