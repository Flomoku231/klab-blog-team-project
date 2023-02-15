import React, { useEffect } from 'react'
import DetailsImage from '../../../Assets/Images/hotel1.jpg'
import '../../../Styles/Pages-styles/NewsPage/NewsDetails/DetailsHeader.css'
import { useSelector, useDispatch } from 'react-redux'
import FetchNews from '../../ReduxPractice/FetchNews'

const DetailsHeader = ({id}) => {
  const Blogs = useSelector(state=> state.blogFetch.data.find(blog => blog.id === id))
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(FetchNews())
  }, [dispatch])
  return (
    <div className='detailHeader__container'>
        <div className="detailHeader__overlay"></div>
        {
          Blogs && Blogs.map((blog)=>{
            return(
              <div className="indBlog" key={id}>
                <img className='detailHeader__image' src={blog.urlToImage} alt="" />
                <div className="detailHeader__content">
                    <img className='PublisherImage' src={blog.urlToImage} alt="" />
                    <h1 id='content__title'>{blog.title}</h1>
                </div>
              </div>
            )
          })
        }
        
    </div>
  )
}

export default DetailsHeader