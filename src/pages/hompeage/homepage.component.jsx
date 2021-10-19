import React from "react";

import Direcotry from "../../components/directory/directory.component";

import './homepage.styles.scss'

const HomePage = () => ( 
    <div className='homepage'> 
        <div className='directory-menu'>
            <Direcotry />
        </div>
    </div>
);

export default HomePage;