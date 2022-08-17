import Details from '../components/Details';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  return (
    <section className="exercise-details">
      <div className="container">
        <Details />
        <ExerciseVideos />
        <SimilarExercises />
      </div>
    </section>

  )
}

export default ExerciseDetail