import React from 'react'

const Exercises = ({ exercise_list }) => {
    return (
        <div>
            <h2>Showing Results:</h2>
            <ul>
                {exercise_list.map((exercise) => (<li key={exercise.id}>{exercise.name}</li>))}
            </ul>
        </div>
    )
}

export default Exercises