import React from 'react'
import ExerciseCard from './ExerciseCard'
import { Pagination } from '@mui/material';
import { useState, useEffect } from 'react';
import { scrollInto } from '../utils/scrollInto';
import { fetchData, exerciseOptions } from '../utils/fetchData';


const Exercises = ({ exercise_list, bodyPart, setExercises }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 12;
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercise_list.slice(indexOfFirstExercise, indexOfLastExercise);

    useEffect(() => {
        const exerciseByCategory = async () => {
            let exerciseData = []
            if (bodyPart === 'all') {
                exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
            } else {
                exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
                scrollInto('list_exercise');
            }

            setExercises(exerciseData);
        }
        exerciseByCategory();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bodyPart])

    const paginate = (event, value) => {
        setCurrentPage(value);
        scrollInto('list_exercise');
    };
    return (
        <div className='bg-alice-blue text-dark' id="list_exercise">
            <div className="container pt-3">
                <h3 className='text-center text-uppercase'>List Of Exercises</h3>
                <hr />
                <div className="text-center">
                    <span class="badge bg-primary me-2">Body Part</span>
                    <span class="badge bg-danger">Target Muscle</span>
                </div>

                <div className="row p-4">

                    {currentExercises.map((exercise) => (<div key={exercise.id} className="col-md-6 col-lg-3">
                        <ExerciseCard exercise={exercise} />
                    </div>
                    ))}

                </div>
                <div className='d-flex justify-content-center pb-3'>
                    {exercise_list.length > 12 && (
                        <Pagination
                            color='primary'
                            variant="outlined"
                            shape="rounded"
                            count={Math.ceil(exercise_list.length / 12)}
                            page={currentPage}
                            onChange={paginate}
                        />
                    )}
                </div>
            </div>

        </div>
    )
}

export default Exercises