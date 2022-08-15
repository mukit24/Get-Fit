import React from 'react'
import Banner from '../components/Banner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
import { useState } from 'react';
const Home = () => {
    const [exercises, setExercises] = useState([])
    return (
        <>
            <Banner />
            <SearchExercises setExercises={setExercises} />
            <Exercises exercise_list={exercises} />
        </>
    )
}

export default Home