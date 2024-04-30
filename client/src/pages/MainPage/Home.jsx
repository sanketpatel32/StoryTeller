import React, { useContext, useState } from 'react';
import style from './Home.module.css';
import Category from './category.jsx';
import axios from "axios";
import { useFilter } from '../../context/FilterContext.jsx';
import StoryBox from '../Story/Story.jsx';
import { UserContext } from '../../context/userContext.jsx';


const Home = () => {


    return (
        <div className={style.container}>
            <Category />
            <StoryBox />
            {/* <div>
                <button onClick={clickHandler}>
                    Click Me
                </button>
            </div> */}
        </div>
    );
};

export default Home;
