import React from 'react'

const Footer = () => {
    return (
        <div className=' w-100 footer text-white p-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-10 col-md-10 col-sm-10 col-12'>
                        <div className='d-flex flex-wrap w-75 justify-content-between'>
                            <div>
                                <img src='../../assets/habot-logo.jpg' alt='' className='f-logo' />
                                <p>© R Singhania</p>
                            </div>
                            <div className='d-flex flex-column'>
                                <a href='link'>Company</a>
                                <a href='link'>About</a>
                                <a href='link'>FAQ</a>
                            </div>
                            <div className='d-flex flex-column'>
                                <a href='link'>Terms</a>
                                <a href='link'>Data Privacy</a>
                                <a href='link'>Terms</a>
                                <a href='link'>Accessibility</a>
                            </div>
                            <div className='d-flex flex-column'>
                                <a href='link'>Related</a>
                                <a href='link'>Find Buyer</a>
                                <a href='link'>Feedback</a>
                            </div>
                        </div>

                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-2 col-12'>
                        <div className='d-flex'>
                            <a href='link' className='social-logo'>
                                <svg xmlns="http://www.w3.org/2000/svg" style={{border : '1px solid black',borderRadius : '50%'}} x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24">
                                    <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
                                </svg>
                            </a>
                            <a href='link' className='social-logo'>
                                <svg xmlns="http://www.w3.org/2000/svg" style={{border : '1px solid black',borderRadius : '50%'}} x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24">
                                    <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z"></path>
                                </svg>
                            </a>
                            <a href='link' className='social-logo'>
                                <svg xmlns="http://www.w3.org/2000/svg" style={{border : '1px solid black',borderRadius : '50%'}} x="0px" y="0px" width="30" height="30" viewBox="0 0 72 72">
                                    <path d="M45.049,14C57.06,14,58,14.94,58,26.951v18.098C58,57.06,57.06,58,45.049,58h-2.298V41.982h5.647l0.888-6.347h-6.535	c0,0-0.01-3.716,0-4.643c0.019-1.814,1.533-2.732,2.835-2.718c1.302,0.013,3.998,0.004,3.998,0.004v-5.849	c0,0-2.335-0.302-4.784-0.328c-2.058-0.021-4.331,0.535-6.165,2.384c-1.865,1.88-2.16,4.679-2.195,8.1c-0.01,0.989,0,3.049,0,3.049	h-5.526v6.347h5.526V58h-9.489C14.94,58,14,57.06,14,45.049V26.951C14,14.94,14.94,14,26.951,14H45.049z"></path>
                                </svg>
                            </a>
                            <a href='link' className='social-logo'>
                                <svg xmlns="http://www.w3.org/2000/svg" style={{border : '1px solid black',borderRadius : '50%'}} x="0px" y="0px" width="30" height="30" viewBox="0 0 64 64">
                                    <path d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"></path>
                                </svg>
                            </a>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Footer;