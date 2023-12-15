import React from 'react'
import Publication_logo from "/assets/images/publication-logo.jpg"

const Publication1 = () => {
    return (
        <section
            className="publication-section" >
            <div className="container">
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={Publication_logo} alt='logo' />
                    </div>
                    <div className='col-md-6'>
                        <p> Authors are invited to submit their original and unpublished work for the conference. All the abstracts of the accepted/presented papers will be published in the conference proceedings (with ISBN). After a double-blind review of the selected full-length paper will be published in Springer
                            (Proceedings) Book series (Scopus indexed). </p>
                        <p>Note: No publication fee. The theme of the conference covers a broad spectrum of Materials Science.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Publication1