
import React, { Component } from 'react';

// Generates img elements for the gallery
class GalleryImage extends Component {
    render() {
        return(
            <img className={this.props.className} src={this.props.src} alt={this.props.alt} />
        )
    }
}

export default GalleryImage;