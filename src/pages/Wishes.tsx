import React, { ReactElement, useState, useEffect } from "react";
import Title from "../components/Title";
import CardWithImage from "../components/CardWithImage";
import SideBar from "../components/Sidebar";
import { Link, useLocation } from "react-router-dom";
import Timeline from "../components/Timeline";
import Slider from 'react-touch-drag-slider'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// here we are importing some images 
// but the Slider children can be an array of any element nodes, or your own components

function Wishes(): ReactElement {
    let [quoteData, setEventData] = useState({})
    let [likeClicked, setLikeClicked] = useState(true)
    let [dislikeClicked, setDislikeClicked] = useState(true)
    let [like, setLike] = useState(0)
    const [sidebarActive, setSidebarActive] = useState(false);

    return (
        <>
            <Title value="FilmHot - AdFree Movie / Anime Watching Website" />
            <div className="flex sm:hidden justify-between px-[4vw] mt-6">
                <Link to="/" className="flex items-center gap-2">
                    <img className="w-8 h-8" src="/icon.png" alt="" />
                    <span className="text-xl font-medium">FilmHot</span>
                </Link>

                <button onClick={() => setSidebarActive(!sidebarActive)}>
                    <i className="fas fa-bars text-2xl"></i>
                </button>
            </div>
            <div className="flex">
                <SideBar
                    sidebarActive={sidebarActive}
                    setSidebarActive={setSidebarActive}
                />
            </div>
            <div className="border border-gray-50 rounded-xl px-48 py-20">
                <header>
                    <CardWithImage></CardWithImage>
                    <CardWithImage></CardWithImage>
                    <Timeline></Timeline>

                </header>

            </div>
            <div className="flex-grow px-[4vw] md:px-8 pb-8 pt-0 overflow-hidden flex flex-col items-stretch">
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
                </div>
        </>

    )
}

export default Wishes;