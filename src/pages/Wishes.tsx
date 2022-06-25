import React, { ReactElement, useState, useEffect } from "react";
import Title from "../components/Title";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ModalImage from "react-modal-image-react-17";
import WishlistToBe from '../images/WishlistToBe.png';
import DigitalCard from '../images/DigitalCard.png';
import HappyBirthday from '../images/HappyBirthday.png';
import WishlistToDanthanh from '../images/WishlistToDanthanh.png';
import CardClose from '../images/CardClose.jpg';
import CardOpen from '../images/CardOpen.jpg';
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
                    <p className="gutter-spacious font-modern-computer">Nếu hỏi xem mình giỏi làm gì nhất có lẽ mình sẽ trả lời là ứng biến ạ, mình khá là bất ổn lại chơi game nhiều nên không lạ lắm nếu chỉ số ứng biến của mình cực cao :3</p>
                    <p className="gutter-spacious font-modern-computer">Ban đầu mình chả có tí ý tưởng gì về việc mình sẽ làm gì đó cho bạn. Thời gian thoi đưa, cơ duyên xảo hợp, bạn đưa mình đẩy. Cuối cùng mình nhận ra "Những món quà" chính là thứ sẽ đi theo mình suốt quãng đường mình thích bạn</p>
                    <p className="gutter-spacious font-modern-computer">Lúc trước xem Kính Vạn Hoa tập 15 ngọn nến mình đã rất thích ý tưởng cái bồ thần - mỗi ngày trong hốc cây đều có 1 món quà xuất hiện, món quà có thể bất kì nhưng nó luôn xuất hiện ở đó.</p>
                    <p className="gutter-spacious font-modern-computer">Quà cáp không quý, quý ở tấm lòng, ở sự kiên trì. Mình đã chứng kiến nhiều thiên tài rơi xuống, họ từng là thiên tài trong lứa của họ và họ cũng không còn giữ được vị trí của mình trên cuộc đua thiên tài.</p>
                    <p className="gutter-spacious font-modern-computer">Chân thành mà nói, mình đã từng thử đặt mình vào vị trí của họ và mình cảm thấy không thoải mái, mình không thích những thứ nhất thời ạ, thay vào đó những thứ bền bỉ, lâu dài sẽ mang ý nghĩa to lớn với mình.</p>
                    <p className="gutter-spacious font-modern-computer">Mà rõ ràng là ai mà chẳng thích pin trâu cơ chứ :3</p>
                    <p className="gutter-spacious font-modern-computer">Những món quà... có lẽ nó không thể giúp bạn trong thực tế nhưng mà có 1 ý nghĩa lớn hơn mà mình muốn nhắn gửi: Một người có thể luôn luôn tặng bạn những món quà, ở khía cạnh nào đó, có khi họ cũng luôn sẵn sàng đưa 1 cánh tay ra để giúp bạn.</p>
                    <p className="gutter-spacious font-modern-computer">Vào khoảng thời gian cuối 2019, mình giành nhiều thời gian để xây dựng 1 hệ thống hỗ trợ mình làm game 1 cách dễ dàng và xịn xò. Lúc đó mình có thiết kế Ability System dùng để quản lý và tạo ra các Ability cho unit (Như Fireball, Lighting Chain, Dash. Double Jump, Moon Slash, etc) và mình nhận ra là cái quần què gì cũng đều có thể được treat dưới dạng 1 Ability, như Dance, Jump, Move, Talk cũng có thể xem như Ability... Quàoooo.</p>
                    <p className="gutter-spacious font-modern-computer">Sự liên hệ ở đây là: Quà có thể là bất cứ thứ gì, không nhất thiết phải có 1 định nghĩa cụ thể để hạn chế những món quà. Quà không nhất thiết phải là thứ gì đó được chứa trong hộp, cũng không nhất thiết phải là thứ được tặng trong 1 dịp đặc biệt. Nên là sẽ thật tuyệt nếu mình có thể tặng cho bạn rất nhiều quà ạ :3.</p>
                    <p className="gutter-spacious font-modern-computer">Ookay, mình có vài tấm thiệp tặng bạn nè.</p>

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
                    <p className="gutter-spacious font-modern-computer">Đây là lần đầu tiên mình viết thiệp cho người mình thích và hiển nhiên bạn là người đầu tiên được nhận ạ. Trong quá khứ mình từng bị nhắc nhở vì tặng quà thiếu đầu tư chất xám, lần này mình chuẩn bị hẳn 1 tháng luôn đó.</p>
                    <p className="gutter-spacious font-modern-computer">Mặc dù không phải là chuẩn bị liền tù tì trong vòng 1 tháng nhưng hầu hết tâm tư của mình đều đặt trên món quà này. Ban đầu mình chỉ định đi tìm 1 template nào đó có sẵn trên mạng rồi chỉnh sửa lại cho dễ và cho đẹp ạ.</p>
                    <p className="gutter-spacious font-modern-computer">Lựa tới lựa lui, gặp vấn đề này đến vấn đề khác... Mình có chút khó chịu a. Vậy là mình đã quyết định sẽ làm ra thứ gì đó cho riêng bạn mặc dù quà có thể không đẹp, có thể không chỉnh chu nhưng không sao cả, nếu cuộc sống chỉ có thể tốt hơn vậy thì quà cũng vậy a.</p>
                    <p className="gutter-spacious font-modern-computer">À mà, mấy món quà của mình tính ra cũng chỉ làm những thứ mình thường làm thôi :3. Cứ coi như có thêm 1 nền tảng để tương tác, đối với mình có càng nhiều lựa chọn sẽ càng có nhiều biến thể và giải pháp được tạo ra, đó là cách để mình khiến bản thân mình không nhàm chán.</p>
                    <p className="gutter-spacious font-modern-computer">Hồi tị em học lớp 1 ấy, buổi sáng ly cho tị em ăn có 4 món à, mỗi ngày 1 món, cứ xoay tua như vậy đến hết năm lớp 1... có vài món tị em ngán thật nhưng mà việc xoay tua như vậy cũng giúp tị em phần nào chịu được :3</p>


                    <div className="pb-4 pt-5 pt-md-7 col-12 col-md-5 position-relative">
                        <img className="center" src={DigitalCard} width={width} height={height} alt="" />
                    </div>
                    <p className="gutter-spacious font-modern-computer">Hết thiệp rồi, nhưng mà đây chưa phải là kết thúc, sau những món quà chính là sự khởi đầu ạ, khởi đầu cho những thói quen, văn hóa, niềm vui. Sau này cứ lâu lâu bạn lại ghé trang web này để xem xem liệu có tính năng nào được thêm vào không.</p>
                    <p className="gutter-spacious font-modern-computer">ddanthanhh.com sẽ luôn chào đón bạn a, và sẽ chỉ chào đón bạn... mà tất nhiên là hiện tại chưa có tính năng đó ròi, sau này sẽ có a, cuộc sống chỉ có thể tốt hơn.</p>
                    <p className="gutter-spacious font-modern-computer">Sinh nhật của bạn khién mình rất vui ó. Mình pass kì thi Master vào HCMUS để có tâm trạng tốt nhất mà còn chúc mừng sinh nhật bạn nè, mình có 1080p để bạn có thể nhìn mình nét hơn nè, mình vẫn kịp về nhà để bắt lấy khoảnh khắc bạn bước qua 24 tuổi này.</p>
                    <p className="gutter-spacious font-modern-computer">Chưa hết đâu, tặng bạn tấm thiệp viết tay nè bạn mở ra xem xem.</p>
                    <div className="div-card-holder">
                        <ModalImage
                            small={CardClose}
                            large={CardOpen}
                            alt="Card"
                        />
                    </div>

                    <br></br>
                    <p className="gutter-spacious font-modern-computer">Đây là một lời hứa cũng như mong muốn của mình: Mình sẽ đi gặp bạn sớm thôi.</p>
                    <p className="gutter-spacious font-modern-computer">Chúc mừng sinh nhật bạnnnn</p>
                    <br></br>
                    <p className="gutter-spacious font-modern-computer">Iu thưnnnn.</p>
                    <br></br>
                </article>
            </div>
            <Footer></Footer>
        </>

    )
}

export default Wishes;