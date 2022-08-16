import React from 'react'
import Banner from '../components/Banner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
import { useState } from 'react';
const Home = () => {
    const [exercises, setExercises] = useState([])
    const [bodyPart, setBodyPart] = useState('all')
    return (
        <>
            <Banner />
            <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            <Exercises exercise_list={exercises} bodyPart={bodyPart} setExercises={setExercises} />
        </>
    )
}

export default Home