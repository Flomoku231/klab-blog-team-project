import React from "react";
import '../../Styles/Pages-styles/NewsPage/News.css'
import { NavBar } from "../../Components/navBar/navBar";
import ExecutiveHouseSearch from "../ExecutiveHouse/ExecutiveHouseSearch";
import NewsSubHeader from "../../Components/NewsSubHeader";
import NewsCards from "../../Components/NewsCards";
import Publisher from '../../Assets/Images/hotel1.jpg'
import { useSelector, useDispatch } from "react-redux";
import {FetchNews} from "../ReduxPractice/FetchNews";

import Hotel1 from '../../Assets/Images/hotel1.jpg'
import Axios from 'axios'

import { Footer } from "../homePage/Footer";
import  { useState } from "react";
import { useEffect } from "react";

const News = () =>{ 
    const Blogs = useSelector(state=> state.blogFetch.data)
    const Loading = useSelector(state=> state.blogFetch.isLoading)
    const error = useSelector(state=> state.blogFetch.error)
    const dispatch = useDispatch();
    const [blogs, setBlogs] = useState([]);

    // useEffect(()=>{
    //     axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-01-03&sortBy=publishedAt&apiKey=598ff10007294bd486810f94fbc068a9")
    //     .then((res)=>{
    //         setBlogs(res.data.articles)
    //     }).catch((err)=>{
    //         console.log(err);
    //     })
    // },[])
    useEffect(()=>{

        dispatch(FetchNews());
        // axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=598ff10007294bd486810f94fbc068a9")
        // .then((res)=>{
        //     setBlogs(res.blogFetch.articles)
        // }).catch((err)=>{
        //     console.log(err);
        // })
    }, [dispatch])

        Axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=598ff10007294bd486810f94fbc068a9")
        .then((res)=>{
            setBlogs(res.data.articles)
        }).catch((err)=>{
            console.log(err)
        })

    return(
        <div className="news__container">
            <NavBar/>
            <ExecutiveHouseSearch/>
            <NewsSubHeader/>
            <div className="news__cards">
                {
                        Blogs.map((blog, index)=>{
                            if(blog.urlToImage !== null){
                                return (
                                    <NewsCards
                                        key={index}
                                        NewsImage = {blog.urlToImage}
                                        PublisherImage = {Publisher}
                                        NewsTitle = {blog.title}
                                        PublisherName = {blog.author}
                                        Description = {blog.description}
                                    />
                                )
                            }
                        })
                }
                
                
            </div>
            <div className="news__pagination">
                <div className="button--container">
                <button className="prev--btn btn">1</button>
                <button className="next--btn btn">2</button>
                <button className="limit--btn btn">Next Page</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default News;