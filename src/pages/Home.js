import React from 'react'
import Banner from '../components/Banner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
    return (
        <>
            <Banner />
            <SearchExercises />
            <Exercises />
        </>
    )
}

export default Home