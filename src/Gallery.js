
import React, { Component } from 'react';
import GalleryImage from './GalleryImage';
import GalleryModal from './GalleryModal';






// Component for the  gallery
class Gallery extends Component {
    allImages = [
        {title: 'one', url: 'https://source.unsplash.com/3Z70SDuYs5g/800x600'},
        {title: 'two', url: 'https://source.unsplash.com/01vFmYAOqQ0/800x600'},
        {title: 'three', url: 'https://source.unsplash.com/2Bjq3A7rGn4/800x600'},
        {title: 'four', url: 'https://source.unsplash.com/t20pc32VbrU/800x600'},
        {title: 'five', url: 'https://source.unsplash.com/pHANr-CpbYM/800x600'},
        {title: 'six', url: 'https://source.unsplash.com/3PmwYw2uErY/800x600'},
        {title: 'seven', url: 'https://source.unsplash.com/uOi3lg8fGl4/800x600'},
        {title: 'eight', url: 'https://source.unsplash.com/CwkiN6_qpDI/800x600'},
        {title: 'nine', url:  'https://source.unsplash.com/9O1oQ9SzQZQ/800x600'},
        {title: 'ten', url:  'https://source.unsplash.com/E4944K_4SvI/800x600'},
        {title: 'eleven', url: 'https://source.unsplash.com/-hI5dX2ObAs/800x600'},
        {title: 'twelve', url: 'https://source.unsplash.com/vZlTg_McCDo/800x600'},

    ];




    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            url: '',
            imageData: this.allImages
        }

        this.openModal = this.openModal.bind(this);

        this.closeModal = this.closeModal.bind(this);
        this.onChange = this.onChange.bind(this);

    }

    onChange(event){
    console.log(event.target.value);
    this.imageFilter(event.target.value);
    }



    imageFilter(imageTitle){
        if (!imageTitle) {
            this.setState({imageData: this.allImages});
            return;
        }
        let currentImages = this.allImages;
        let filterResults = currentImages.filter( image => this.includesImageTitle(image.title, imageTitle))
        this.setState({imageData: filterResults});
    }

    includesImageTitle(title, filterCriteria){
        return title.includes(filterCriteria);
    }

    render() {

        return(
            <div refs='gallery-container' className='container-fluid gallery-container'>
                < input type="text" onChange={this.onChange}/>
                <div className='row'>
                    {
                        this.state.imageData.map((image, index) => {
                            let url = image.url;
                            return <div key={index} className='col-sm-6 col-md-3 col-xl-2'>
                                <div className='gallery-card' value={url} onClick={(e) => this.openModal(url, e)}>
                                    <GalleryImage className='gallery-thumbnail' src={url} alt={'Image number ' + (index + 1)} title={image.title}/>

                                    <span className='card-icon-open fa fa-expand' ></span>
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
