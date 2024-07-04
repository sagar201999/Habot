import React, { useState } from 'react'
import '../App.css'
import '../MediaQueries.css'

const Homepage = () => {

    const [paragraphVisible, setParagraphVisible] = useState(1);

    const handleClick = (paragraphNumber) => {
        setParagraphVisible(paragraphNumber);
    }


    return (
        <div className=''>
            <div className='homepage-bg w-100'>
                <div className='home-wrapper text-white'>
                    <div className='lh-1'>
                        <h1 className='fs-50px mb-0'>Are You a Supplier?</h1>
                        <p className='fs-50px'>Explore Matching Opportunities.</p>
                    </div>
                    <div className='w-100 mb-4 d-flex flex-wrap justify-content-center align-items-center'>
                        <input type='text' className='input-width' placeholder='Search your required service here' />
                        <input type='text' className='input-width' placeholder='Search your desire location here' />
                        <button className='btn-width'>Search</button>
                    </div>
                    <p className='fs-5 fw-bold'>Are you a buyer? &nbsp;<a href='link' className='text-white fw-medium'>Click here if you are looking to post a requirements</a></p>
                </div>
            </div>

            <div className='section-2 d-flex flex-wrap justify-content-between align-items-center'>
                <div className='about-wrapper'>
                    <h1 className='fw-bolder'>Ready to dive into HABOT?</h1>
                    <p className='text-justify fs-5 my-4 '>Signing up with HABOT opens the doors to a world of new Opportunities and potential for business growth.
                        Gain access to a vibrant community of like-minded individuals, unlock valuable rsources, and take the first
                        step towards realizing your enterpreneurial dreams.
                    </p>
                    <button className='signUp'>Sign up Today! </button>

                </div>
                <div className='city-wrapper'>
                    <div className='row mx-0'>
                        <div className='col-md-6'>
                            <p className='city'>Abu Dhabi</p>
                        </div>
                        <div className='col-md-6'>
                            <p className='city'>Dubai</p>
                        </div>
                        <div className='col-md-6'>
                            <p className='city'>Sharjah & Ajman</p>
                        </div>
                        <div className='col-md-6'>
                            <p className='city'>Fujairah</p>
                        </div>
                        <div className='col-md-6'>
                            <p className='city'>Ras AI Khaimah</p>
                        </div>
                        <div className='col-md-6'>
                            <p className='city'>Umm AI Quwain</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='section-3'>
                <div className='row info-padding mx-0'>
                    <div className='col-md-6 col-12'>
                        <iframe width="95%" height="300" style={{borderRadius : '8px'}} src="https://www.youtube.com/embed/IZLp-TZyDkQ?si=6MF6s1EajsB6BPNV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className='col-md-6 col-12 text-white info-parent'>
                        <div className='d-flex w-100 justify-content-between'>
                            <p onClick={() => handleClick(1)} className={`btn-line ${paragraphVisible === 1 ? 'active' : ''}`}>Buyer</p>
                            <p onClick={() => handleClick(2)} className={`btn-line ${paragraphVisible === 2 ? 'active' : ''}`}>Supplier</p>
                        </div>
                        {paragraphVisible === 1 &&
                            <div className='info-child info-1'>
                                <p className='fs-5'><img src='../../assets/green-tick.svg' alt='tick' className='tick' /><span>Post your requirements</span></p>
                                <p className='fs-5'><img src='../../assets/green-tick.svg' alt='tick' className='tick' /><span>Sit back for multiple suppliers ro contact you</span></p>
                                <p className='fs-5'><img src='../../assets/green-tick.svg' alt='tick' className='tick' /><span>Choose among the suppliers based on the rating and reviews</span></p>
                            </div>
                        }

                        {paragraphVisible === 2 &&
                            <div className='info-child info-1'>
                                <p className='fs-5'><img src='../../assets/green-tick.svg' alt='tick' className='tick' /><span>Post your requirements set here</span></p>
                                <p className='fs-5'><img src='../../assets/green-tick.svg' alt='tick' className='tick' /><span>Sit back for multiple suppliers ro contact you</span></p>
                                <p className='fs-5'><img src='../../assets/green-tick.svg' alt='tick' className='tick' /><span>Choose among the suppliers based on the rating and reviews</span></p>
                            </div>
                        }

                    </div>
                </div>

            </div>

            <div className='section-4'>
                <div className='d-flex flex-wrap w-100 justify-content-between s4-wrapper'>
                    <div className=''>
                        <p className=' fw-bolder fs-1'>Let Suppliers <span style={{borderBottom : '4px solid rgb(255, 60, 0)'}}> Find You</span></p>
                    </div>
                    <div className=''>
                        <button className='verified-btn' >Get Verified</button>
                    </div>
                </div>
            </div>


            <div className='section-5'>
                <div className='text-center mb-5 w-70 m-auto'>
                    <h1 className='fw-bolder mb-4'>How it works?</h1>
                    <p className='fs-5 fs-medium'>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential
                       buyers, and build successful business relationships, sharing valuable feedback.
                    </p>
                </div>

                <div className='row mx-0 text-center HIW'>
                    <div className='col-lg-4 col-md-4 col-sm-6 col-12 p-0 bg-lightSky'>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <img src='../../assets/icon-1.png' alt='icons' className='icons' />
                            <p className='m-0 fs-5 fw-medium w-75 mt-4'>Select Your Role and Sign Up</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-6 col-12 p-0'>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <img src='../../assets/icon-2.png' alt='icons' className='icons' />
                            <p className='m-0 fs-5 fw-medium w-75 mt-4'>Buyers Post Your Requirements</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-6 col-12 p-0 bg-lightSky'>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <img src='../../assets/icon-3.png' alt='icons' className='icons' />
                            <p className='m-0 fs-5 fw-medium w-75 mt-4'>Review,Select,and Contact the Best Suppliers</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-6 col-12 p-0'>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <img src='../../assets/icon-4.png' alt='icons' className='icons' />
                            <p className='m-0 fs-5 fw-medium w-75 mt-4'>Suppliers Complete your profile and get notified for opportunities</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-6 col-12 p-0 bg-lightSky'>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <img src='../../assets/icon-5.png' alt='icons' className='icons' />
                            <p className='m-0 fs-5 fw-medium w-75 mt-4'>Contact to Buyers and Share Your Quote for the Service</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-6 col-12 p-0'>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <img src='../../assets/icon-6.png' alt='icons' className='icons' />
                            <p className='m-0 fs-5 fw-medium w-75 mt-4'>Both the Parties can Connect and Make Business Leaves a Feedback</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Homepage


