
import React from 'react'
import { NavBar } from '../../../Components/navBar/navBar'
import '../../../Styles/Pages-styles/NewsPage/NewsDetails/NewsDetails.css'
import ExecutiveHouseSearch from '../../ExecutiveHouse/ExecutiveHouseSearch'
import DetailsBody from './DetailsBody'
import DetailsHeader from './DetailsHeader'
import RelatedPostImage from '../../../Assets/Images/hotel1.jpg'
import DetailsPost from './DetailsPost'
import { Footer } from '../../homePage/Footer'

const NewsDetails = () => {
  return (
    <div className='newsDetails__container'>
        <NavBar/>
        <ExecutiveHouseSearch/>
        <DetailsHeader/>
        <DetailsBody/>
        <div className="relatedPosts__container">
           <h1>Related Posts</h1>
            <div className="relatedPosts__cards">
                <DetailsPost
                    PostImage = {RelatedPostImage}
                    Description = {'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil corporis modi mollitia fugit ad quo sint id vitae quae repellat excepturi, similique recusandae dolorem. Ducimus, laudantium consequatur! Corporis, pariatur neque.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil corporis modi mollitia fugit ad quo sint id vitae quae repellat excepturi, similique recusandae dolorem. Ducimus, laudantium consequatur! Corporis, pariatur neque.'}
                    PostTitle = {'Ijfjfj hei9ejd hgieiekd djhidiodod jdhdid '}
                />
                <DetailsPost
                    PostImage = {RelatedPostImage}
                    Description = {'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil corporis modi mollitia fugit ad quo sint id vitae quae repellat excepturi, similique recusandae dolorem. Ducimus, laudantium consequatur! Corporis, pariatur neque.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil corporis modi mollitia fugit ad quo sint id vitae quae repellat excepturi, similique recusandae dolorem. Ducimus, laudantium consequatur! Corporis, pariatur neque.'}
                    PostTitle = {'Ijfjfj hei9ejd hgieiekd djhidiodod jdhdid '}
                />
                <DetailsPost
                    PostImage = {RelatedPostImage}
                    Description = {'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil corporis modi mollitia fugit ad quo sint id vitae quae repellat excepturi, similique recusandae dolorem. Ducimus, laudantium consequatur! Corporis, pariatur neque.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil corporis modi mollitia fugit ad quo sint id vitae quae repellat excepturi, similique recusandae dolorem. Ducimus, laudantium consequatur! Corporis, pariatur neque.'}
                    PostTitle = {'Ijfjfj hei9ejd hgieiekd djhidiodod jdhdid '}
                />
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default NewsDetails