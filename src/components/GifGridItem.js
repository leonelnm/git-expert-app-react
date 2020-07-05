import React from 'react'

export const GifGridItem = ({ title, url }) => {
    return (
        <div className='card animate__animated animate__fadeIn animate__fast'>
            <img src={url} alt={title} />
        </div>
    )
}
