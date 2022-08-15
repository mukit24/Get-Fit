import React from 'react'
import { useState } from 'react'
import { fetchData, exerciseOptions } from '../utils/fetchData'
import CategoryScroller from './CategoryScroller'

const SearchExercises = ({ setExercises }) => {
    const [search, setSearch] = useState('')

    const handleSearch = async () => {
        // console.log('Clicked');
        if (search) {
            const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

            const searchedExercises = exerciseData.filter((exercise) =>
                exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search))

            // console.log(searchedExercises);

            setSearch('');
            setExercises(searchedExercises);
        }
    }

    return (
        <section className='bg-search text-dark p-5'>
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <h3 className='pb-4'>
                    Awesome Exercises You Should Know
                </h3>
                <div className="input-group search-exercise">
                    <input type="text" className="form-control" placeholder="Search Exercise" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} />
                    <button className="btn btn-success" type="button" onClick={handleSearch}>Search</button>
                </div>
            </div>
            <CategoryScroller />
        </section>
    )
}

export default SearchExercises