import Separator from '../../components/UI/separator/Separator';
import MainNews from './components/mainNews/mainNews';
import React from 'react';

const Main = () => {
    return(
    <React.Fragment>
        <MainNews/>
        <Separator/>
    </React.Fragment>
    )
};

export default Main;