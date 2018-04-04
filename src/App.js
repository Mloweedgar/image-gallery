import React, { Component } from 'react';
import './App.css';

// Cache gallery container
const galleryContainer = document.querySelector('.react-gallery');

// Create new array with URLs for images
let imgUrls = [
    'https://source.unsplash.com/3Z70SDuYs5g/800x600',
    'https://source.unsplash.com/01vFmYAOqQ0/800x600',
    'https://source.unsplash.com/2Bjq3A7rGn4/800x600',
    'https://source.unsplash.com/t20pc32VbrU/800x600',
    'https://source.unsplash.com/pHANr-CpbYM/800x600',
    'https://source.unsplash.com/3PmwYw2uErY/800x600',
    'https://source.unsplash.com/uOi3lg8fGl4/800x600',
    'https://source.unsplash.com/CwkiN6_qpDI/800x600',
    'https://source.unsplash.com/9O1oQ9SzQZQ/800x600',
    'https://source.unsplash.com/E4944K_4SvI/800x600',
    'https://source.unsplash.com/-hI5dX2ObAs/800x600',
    'https://source.unsplash.com/vZlTg_McCDo/800x600'
];

class App extends Component {


  render() {

      let title = 'Hello world';
    return (
      <h1 className="jumbotron">{title}</h1>
    );
  }
}

export default App;
