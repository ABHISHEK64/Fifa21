import React from 'react'
import './Navbar.css';
import ArrowBack from '@material-ui/icons/ArrowBack'
import QuestionAnswerRounded from '@material-ui/icons/QuestionAnswerRounded'
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div className="NavBar">
            <ul className="NavItem">
               <Link to='/' style={{textDecoration:'none'}}> <li className="NavLink"><ArrowBack/>Home</li></Link>
                <li className="NavLink"><QuestionAnswerRounded/>Help</li>
            </ul>
        </div>
    )
}

export default Navbar
