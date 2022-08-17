import Details from '../components/Details';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData, exerciseOptions, videoOptions } from '../utils/fetchData';

const ExerciseDetail = () => {
  const { id } = useParams();
  const [detailsData, setdetailsData] = useState({})
  const [exerciseVideo, setexerciseVideo] = useState([])

  const name = 'push up'
  useEffect(() => {
    const fetchDetailsData = async () => {
      // const data = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseOptions);
      // setdetailsData(data);

      const videoData = await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${name}`, videoOptions);
      setexerciseVideo(videoData);
      console.log(exerciseVideo);
    }
    fetchDetailsData();
  }, [id])

  return (
    <section className="exercise-details bg-alice-blue">
      <div className="container">
        <Details detailsData={detailsData} />
        <ExerciseVideos />
        <SimilarExercises />
      </div>
    </section>

  )
}

export default ExerciseDetail