import React from 'react'
import { Link } from 'react-router-dom'

const ExerciseCard = ({ exercise }) => {
    return (

        <div className="card m-2">
            <div className="card-body text-center text-capitalize">
                <img src={exercise.gifUrl} className="img-fluid mb-3" alt="" />
                <span class="badge bg-primary me-2">{exercise.bodyPart}</span>
                <span class="badge bg-danger">{exercise.target}</span>
                <p className="card-title my-2 ">{exercise.name}</p>
                <Link to={`/exercise/${exercise.id}`}><button className='btn btn-sm btn-success '>Details</button></Link>
            </div>
        </div>
    )
}

export default ExerciseCard