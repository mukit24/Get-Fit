import React from 'react'
import BannerPic from '../assets/images/banner_pic.png'
const Banner = () => {
    return (
        <section className="bg-alice-blue text-dark p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
            <div className="container">
                <div className="d-sm-flex align-items-center justify-content-between">
                    <div>
                        <h1 className='fw-bold'>Stay Fit <span className="text-success">Stay Heathy</span></h1>

                        <p className="lead my-4">
                            We focus on Fitness.Check out the most effective exercises
                        </p>

                        <button className="btn btn-primary" >Explore Exercises</button>
                    </div>
                    <img className="img-fluid" src={BannerPic} alt="banner" />
                </div>
            </div>
        </section>
    )
}

export default Banner