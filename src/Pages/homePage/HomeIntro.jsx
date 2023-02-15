import React from "react";
import Fade from 'react-awesome-reveal'
import introImage from '../../Assets/Images/hotel1.jpg'
import '../../Styles/Pages-styles/homePage/HomeIntro.css'

export const HomeIntro =()=>{
    return(
        <div className="Intro__container">
            <div className="intro__header">
                <div className="intro__header--left">
                <Fade left>
                    <h1>Luxury Real Estate</h1>
                    <h2>It's Time To Find Your Luxury Home</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, assumenda porro qui similique cumque, aut laborum laboriosam veniam 
                     ? a harum ab nisi, magni voluptas odit, commodi distinctio repellat.</p>
                </Fade>
                </div>
                <div className="intro__header--rightImage">
                    <Fade right>
                    <img src={introImage} alt="" />
                    </Fade>
                </div>
            </div>
            <div className="intro__bottom">
                <h1>We offer Highest Level of Expertise, Service and Integrity</h1>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugiat esse animi magnam iusto explicabo dolor consectetur, 
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit numquam excepturi a veritatis, consequuntur quasi hic 
                   dolorem quia tempora? Recusandae cum eaque corrupti architecto! Quod corporis esse nemo tempora molestias. delectus deleniti, id voluptate 
                   exercitationem dolores magni nemo ratione facere rem reprehenderit. Sint.</h2>
            </div>
        </div>
    )
}