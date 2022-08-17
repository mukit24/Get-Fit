import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData, exerciseOptions } from '../utils/fetchData';

const Details = () => {
    const { id } = useParams();
    const [detailsData, setdetailsData] = useState({})

    useEffect(() => {
        const fetchDetailsData = async () => {
            const data = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseOptions);
            console.log(data);
            setdetailsData(data);
        }
        fetchDetailsData();
    }, [id])
    console.log(detailsData);
    const { bodyPart, equipment, gifUrl, name, target } = detailsData;

    return (
        <div>
            <li>{bodyPart}</li>
            <li>{name}</li>
        </div>
    )
}

export default Details