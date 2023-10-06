import React from 'react'

const DownloadSec = () => {
    return (
        <section
            className="download-section"
        >
            <div className="container">
                <div className='row Download-main'>
                    <div className='col-md-6'>
                    <h3 className=' Download-Head'>Downloads</h3>
                        <ul style={{ paddingLeft: "0px" }}>
                            <div className="ci-item with-bg Download-List">
                                <h5>
                                    <i class="fa fa-download" aria-hidden="true"></i>
                                    <a href="assets/images/abstract_template.docx" target="_blank" rel="noopener noreferrer" >Brochure</a>
                                </h5>
                            </div>
                            <div className="ci-item with-bg ">
                                <h5>
                                    <i class="fa fa-download" aria-hidden="true"></i>
                                    <a href="assets/images/abstract_template.docx" target="_blank" rel="noopener noreferrer" >Abstract Template</a>
                                </h5>
                            </div>
                        </ul>
                    </div>
                    <div className='col-md-6'>
                        <img src="/assets/images/nanomaterials.jpg" alt="" className="nanomaterial" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default DownloadSec