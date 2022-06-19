import React, { ReactElement, useState, useEffect } from "react";
import Title from "../components/Title";
import CardWithImage from "../components/CardWithImage";
import SideBar from "../components/Sidebar";
import { Link, useLocation } from "react-router-dom";
import Timeline from "../components/Timeline";
import Slider from 'react-touch-drag-slider'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import WishlistToBe from '../images/Wishlisttobe.png';
// here we are importing some images 
// but the Slider children can be an array of any element nodes, or your own components

function Wishes(): ReactElement {
    let [quoteData, setEventData] = useState({})
    let [likeClicked, setLikeClicked] = useState(true)
    let [dislikeClicked, setDislikeClicked] = useState(true)
    let [like, setLike] = useState(0)
    const [sidebarActive, setSidebarActive] = useState(false);
    const width = 800;
    const height = 600; 
    return (
        <>
            <Title value="Happy birthday ddanthanhh" />
            <div className="flex items-stretch">
                {/* <div>
                    <Timeline></Timeline>

                </div> */}
                <div className="flex">
                    <img src={WishlistToBe} width={width} height={height} alt=""/>

                </div>
                <div className="flex">
                    <a>
                        <p>Hi mom</p>
                    </a>
                    <a>
                        <img className="inline" src="assets/Happy birthday.png " width={width} height={height} alt=""/>
                    </a>
                </div>
                <div className="flex">
                    <img src="assets/Wishlist to danthanh.png " width={width} height={height} alt=""/>

                </div>
                <div className="flex">
                    <img src="assets/Digital card.png " width={width} height={height} alt=""/>

                </div>
                {/* <header>

                </header> */}


            </div>
            {/* <div className="flex-grow px-[4vw] md:px-8 pb-8 pt-0 overflow-hidden flex flex-col items-stretch">
                <Carousel>
                    <div>
                        <img src="assets/d1.jpg" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src="assets/d2.jpg" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="assets/d3.jpg" />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            </div> */}
        </>

    )
}

export default Wishes;