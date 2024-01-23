import { useEffect } from 'react';
import style from './Nav.module.scss'
import { Link } from 'react-router-dom';

export const Navigation = () => {
 
    useEffect(() => {
        console.log("Navigation Component has Mounted")
        return (
            () => {
                console.log("Navigation Component has Un-Mounted")
            }
        )
    }, [])

    return (
        <nav className={style.navStyle}>
            <div>
                <Link to="/">Home</Link>
                <Link to="/work">Work</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>

            </div>
        </nav>
    )
}