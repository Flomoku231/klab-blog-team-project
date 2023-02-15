import React from 'react'
import '../../Styles/Pages-styles/AdminDashboard/AddBlog.css'

const AddBlog = () => {
  return (
    <div className='addBlog__container'>
        <form action="" className="addBlog__form">
            <div className="blog__image">
                <label htmlFor="blogImage">Blog Image</label>
                <input type="file" id="blogImage" />
            </div>
            <div className="author__image">
                <label htmlFor="authorImage">Author Image</label>
                <input type="file" id="authorImage" />
            </div>
            <div className="blog__title">
                <label htmlFor="blogTitle">Blog Title</label>
                <input type="text" id="blogTitle" />
            </div>
            <div className="author__name">
                <label htmlFor="authorName">Author Name</label>
                <input type="text" id="authorName" />
            </div>
            <div className="blog__description">
                <label htmlFor="blogDes">Blog Description</label>
                <input type="text" id="blogDes" />
            </div>
            <button className="addBlog__button">Add Blog</button>
        </form>
    </div>
  )
}

export default AddBlog