import React, { ReactElement, useState, useEffect } from "react";
import Title from "../components/Title";
import CardWithImage from "../components/CardWithImage";
import SideBar from "../components/Sidebar";
import { Link, useLocation } from "react-router-dom";
import Timeline from "../components/Timeline";
import Slider from 'react-touch-drag-slider'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import WishlistToBe from '../images/WishlistToBe.png';
import DigitalCard from '../images/DigitalCard.png';
import HappyBirthday from '../images/HappyBirthday.png';
import WishlistToDanthanh from '../images/WishlistToDanthanh.png';
import Sidebar from "../components/Sidebar";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Footer from "../components/Footer";
import Header from "../components/Header";
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
            <Header></Header>
            <div className="archive post-type-archive post-type-archive-changelog font-mktg hfeed no-sidebar hero-image">
                <article className="">
                    <p className="gutter-spacious font-modern-computer">Sau vài tuần háo hức chờ quà thì cuối cùng bạn đã 24 rồi, mình cũng không còn hơn tuổi bạn nữa...ầy không sao a</p>
                    <div className="pb-4 pt-5 pt-md-7 col-12 col-md-5 position-relative .border-bottom">
                        <img className="center" src={HappyBirthday} alt="" width={width} height={height} />
                    </div>
                </article >
                <article className="">
                    <p className="gutter-spacious font-modern-computer">Cách đây 3 tháng 3 ngày bạn có tặng mình kha khá lời chúc. Bạn chúc khá là hiệu nghiệm nên hầu như mình đều đã thực hiện được.
                        Chỉ còn 1 điều mình chưa thực hiện được nhưng mình cũng không cần nữa - chính là earbuds, bai earbuds.  </p>
                    <br></br>
                    <p className="gutter-spacious font-modern-computer">Mình cũng có nhiều điều giành cho bạn, cùng xem có bao nhiều điều thực hiện được nào.</p>
                    <div className="pb-4 pt-5 pt-md-7 col-12 col-md-5 position-relative">
                        <img className="center" src={WishlistToBe} width={width} height={height} alt="" />
                    </div>
                </article>
                <article>
                    <p className="gutter-spacious font-modern-computer">Và cả cho ddanthanhh nứa.</p>
                    <div className="pb-4 pt-5 pt-md-7 col-12 col-md-5 position-relative">
                        <img className="center" src={WishlistToDanthanh} width={width} height={height} alt="" />
                    </div>
                </article>
                <article>
                    <p className="gutter-spacious font-modern-computer">Đây là lần đầu tiên mình viết thiệp cho người mình viết và hiển nhiên bạn là người đầu tiên được nhận ạ. Trong quá khứ mình từng bị nhắc nhở vì tặng quà thiếu đầu tư chất xám.</p>
                    <p className="gutter-spacious font-modern-computer">Cũng không .</p>
                    <div className="pb-4 pt-5 pt-md-7 col-12 col-md-5 position-relative">
                        <img className="center" src={DigitalCard} width={width} height={height} alt="" />
                    </div>
                    <p className="gutter-spacious font-modern-computer">Iu thưnnnn.</p>
                    <br></br>
                </article>
            </div>
            <Footer></Footer>
        </>

    )
}

export default Wishes;