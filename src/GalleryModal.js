
import React, { Component } from 'react';

// For image preview in the gallery
class GalleryModal extends Component {
    render() {

        if (this.props.isOpen === false) {
            return null;
        }

        return(
            <div  className='modal-overlay' onClick={this.props.onClick} name={this.props.name}>
                <div className='modal-body'>
                    <a className='modal-close' href='#' onClick={this.props.onClick}><span className='fa fa-times'></span></a>

                    <img src={this.props.src} />
                </div>
            </div>
        )
    }
}

export default GalleryModal;