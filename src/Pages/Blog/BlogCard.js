import React from 'react';
import {Link} from 'react-router-dom';

const BlogCard = ({BlogData}) => {
    const {blogLink, imgLink, title, description, buttonText} = BlogData;
    return (
        <div className='card'>
            <div className='top'>
                <Link to={blogLink} className="imgBox">
                    <img src={imgLink} alt={title} />
                </Link>
            </div>
            <div className='bottom'>
                <Link to={blogLink} >
                    <h3>{title}</h3>
                </Link>
                <p>{description}</p>
                <Link to={blogLink} className='btnBlog'>{buttonText}</Link>
            </div>
        </div>
    );
}

export default BlogCard;
