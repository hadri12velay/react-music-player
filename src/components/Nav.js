import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
// import Logo from './Logo';

const Nav = ({setLibraryStatus, libraryStatus}) => {
    return (
        <nav>
            <h1>Music Player</h1>
            {/* <Logo/> */}
            <button onClick={() => setLibraryStatus(!libraryStatus)}>
                <FontAwesomeIcon icon={faBars} />
                Library
            </button>
        </nav>
    )
}

export default Nav;