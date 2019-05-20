import './ImageList.css';
import ImageCard from './ImageCard';
import React from 'react';

const ImageList = props => {
    // instead of having image as an argument
    // that later turns into "image.description", "image.id", "image.urls.regular"
    // we can use destructuring, syntax = ({description, id, urls})
    const images = props.images.map(image => {
        return <ImageCard key={image.id} image={image} />
    });

    return <div className="image-list">{images}</div>
}

export default ImageList;