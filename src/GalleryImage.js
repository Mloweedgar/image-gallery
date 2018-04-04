
import React, { Component } from 'react';

// Generates img elements for the gallery
class GalleryImage extends Component {
    render() {
        return(

            <div>
                <h4>{this.props.title}</h4>
            <img className={this.props.className} src={this.props.src} alt={this.props.alt} />
            </div>
        )
    }
}

export default GalleryImage;