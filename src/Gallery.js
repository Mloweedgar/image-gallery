
import React, { Component } from 'react';

// Component for the  gallery
class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            url: ''
        }

        this.openModal = this.openModal.bind(this);

        this.closeModal = this.closeModal.bind(this);
    }

    render() {
        return(
            <div refs='gallery-container' className='container-fluid gallery-container'>
                <div className='row'>
                    {
                        imgUrls.map((url, index) => {
                            return <div className='col-sm-6 col-md-3 col-xl-2'>
                                <div className='gallery-card'>
                                    <GalleryImage className='gallery-thumbnail' src={url} alt={'Image number ' + (index + 1)} />

                                    <span className='card-icon-open fa fa-expand' value={url} onClick={(e) => this.openModal(url, e)}></span>
                                </div>
                            </div>
                        })
                    }
                </div>

                <GalleryModal isOpen={this.state.showModal} onClick={this.closeModal} src={this.state.url} />
            </div>
        )
    }

    // Function for opening modal dialog
    openModal(url, e) {
        this.setState({
            showModal: true,
            url: url
        })
    };

    // Function for closing modal dialog
    closeModal() {
        this.setState({
            showModal: false,
            url: ''
        })
    }
}

export default Gallery;