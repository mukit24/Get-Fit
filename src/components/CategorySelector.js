import React from 'react'
const CategorySelector = ({ bodyPart, setBodyPart }) => {

    const bodyParts = ['all', 'back', 'cardio', 'chest', 'lower arms', 'lower legs', 'neck', 'shoulders', 'upper arms', 'upper legs', 'waist']

    const handleChange = (event) => {
        setBodyPart(event.target.value);
    }

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center">
            <h3 className='p-4'>
                Select Your Desired Exercise
            </h3>
            <div className="form-floating select-category">
                <select className="form-select bg-light" id="floatingSelect" aria-label="Floating label select example" value={bodyPart} onChange={handleChange}>
                    {bodyParts.map((part) => (<option key={part} value={part}>{part.toUpperCase()}</option>))}
                </select>
                <label htmlFor="floatingSelect">Select Category</label>
            </div>
        </div>

    )
}

export default CategorySelector