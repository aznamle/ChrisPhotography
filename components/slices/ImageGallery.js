import React from 'react'

const ImageGallery = ({ slice }) => {

    return (
        <div className=''>
            {slice.items.map(image => (
                <div className='mx-auto object-center items-center w-1/3'>
                    <img src={image.photo.url} />
                </div>
            ))}
        </div>
    )
}

export default ImageGallery
