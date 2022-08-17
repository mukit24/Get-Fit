import React from 'react'

const ExerciseVideos = ({ exerciseVideo, name }) => {
    // const sliced_videos = [];
    // sliced_videos = exerciseVideo.slice(0, 3);
    // console.log(sliced_videos)
    console.log(exerciseVideo.slice(0, 6))
    return (
        <div className='pt-5' id='list_exercise'>
            <h3 className='text-center'>Watch <strong className='text-danger text-capitalize'>{name}</strong> exercises video</h3>
            <div className="row align-items-center justify-content-center">
                {exerciseVideo.slice(0, 6).map((item, index) => (
                    <div className="col-sm-4 p-2">
                        <img src={item.video.thumbnails[0].url} alt={item.video.title} className="img-fluid vieo-img" />


                        <div className="d-flex justify-content-between pt-2">
                            <h5 className='video-title'>{item.video.title}</h5>
                            <a key={index} href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target='_blank' rel="noreferrer">
                                <button className='btn btn-sm btn-success'>Watch <i className='fa fa-youtube-play'></i></button>
                            </a>
                        </div>
                        <h6>{item.video.channelName}</h6>

                    </div>

                ))}
            </div>
        </div>
    )
}

export default ExerciseVideos