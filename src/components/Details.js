const Details = ({ detailsData }) => {

    const { bodyPart, equipment, gifUrl, name, target } = detailsData;

    return (
        <div className="row align-items-center justify-content-center">
            <div className="col-sm-5 p-2">
                <img className='img-fluid' src={gifUrl} alt="exercise_demo" />
            </div>
            <div className="col-sm-7">
                <h3 className='py-3 text-capitalize'>{name}</h3>
                <p className='pb-2'>Exercise <strong>{name}</strong> keep you strong. It is one of the best exercise to target your {target}.It will help you to improve your {bodyPart}. A visual demo is given to demonstrate the exercise.</p>
                <button type="button" class="btn btn-primary btn-sm me-2 my-1">
                    Body Part <span class="badge bg-light text-dark text-capitalize">{bodyPart}</span>
                </button>
                <button type="button" class="btn btn-danger btn-sm me-2 my-1">
                    Target Muscle <span class="badge bg-light text-dark text-capitalize">{target}</span>
                </button>
                <button type="button" class="btn btn-warning btn-sm my-1">
                    Equipment <span class="badge bg-light text-dark text-capitalize">{equipment}</span>
                </button>
            </div>
        </div>
    )
}

export default Details