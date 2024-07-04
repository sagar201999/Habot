import React from 'react'

const Footer = () => {
    return (
        <div className=' w-100 footer text-white p-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 col-md-8 col-sm-8 col-12'>
                        <div className='d-flex w-75 justify-content-between'>
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
                    <div className='col-lg-4 col-md-4 col-sm-4 col-12'>
                        <div className='d-flex'>
                            <a href='link'>Linkedin</a>
                            <a href='link'>twitter</a>
                            <a href='link'>facebook</a>
                            <a href='link'>instagram</a>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Footer;