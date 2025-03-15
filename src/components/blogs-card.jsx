import React from 'react';
import moveRight from "../images/move-right.png";

export default function BlogsCard({ blog }) {
    return (
        <div className="blog-card">
            <img src={blog.imagen} alt={blog.titulo} className='blog-card-image' />
            <div className='blog-title'>
                <div className='blog-title-heading'>{blog.title}</div>
                <div className='blogs-button'><span>Leer más <img src={moveRight} /> </span></div>
            </div>
        </div>
    )
}
