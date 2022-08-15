import React from 'react'
import ExerciseCard from './ExerciseCard'
import { Pagination } from '@mui/material';
import { useState } from 'react';

const Exercises = ({ exercise_list }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 12;
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercise_list.slice(indexOfFirstExercise, indexOfLastExercise);

    const paginate = (event, value) => {
        setCurrentPage(value);

        var elem = document.getElementById("list_exercise");
        elem.scrollIntoView();
    };
    return (
        <div className='bg-alice-blue text-dark' id="list_exercise">
            <div className="container pt-3">
                <h2 className='text-center fw-bold'>Showing Results</h2>
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