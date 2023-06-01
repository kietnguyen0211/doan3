import { Link } from "react-router-dom"
import { MdOutlineSell } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import { BsReverseLayoutTextSidebarReverse } from 'react-icons/bs';
import { AiOutlineHeart } from "react-icons/ai" 
import { VscAccount } from "react-icons/vsc"
import { FiFilter } from "react-icons/fi"
import { RiSearchLine } from "react-icons/ri"
import { GrShop } from "react-icons/gr"
import { MdKeyboardArrowDown } from "react-icons/md" 
import png from "../header/img/logo2.png"
import axios from "axios"
import css from "../header/Header.css"
export default function Header(){

    return(
        <div className="header">
            <div className="topHeader">
                <div className="leftTopHeader">
                    <div className="bestSeller">
                        <span className="iconTopHeader"><MdOutlineSell/></span>
                        <Link className="linkTopHeader"><span>Bán chạy</span></Link>
                    </div>
                    <div className="blog">
                        <span  className="iconTopHeader"><BsReverseLayoutTextSidebarReverse/></span>
                        <Link className="linkTopHeader"><span>Bài viết</span></Link>
                    </div>
                    <div className="loveProduct">
                        <span className="iconTopHeader"><AiOutlineHeart/></span>
                        <Link className="linkTopHeader"><span>Danh mục yêu thích</span></Link>
                    </div>
                </div>
                <div className="rightTopHeader">
                    <div className="email">
                        <span className="iconTopHeader"><HiOutlineMail/></span>
                        <Link className="linkTopHeader"><span>Email</span></Link>
                    </div>
                    <div className="account">
                        <span className="iconTopHeader"><VscAccount/></span>
                        <Link className="linkTopHeader"><span>Tài khoản</span></Link>
                    </div>
                </div>
            </div>
            <div className="middleHeader">
                <div className="leftMiddleHeader">
                    <div className="logo">
                        <img src={png}></img>
                        <h1>MyBooks</h1>
                    </div>
                </div>
                <div className="centerMiddleHeader">
                    <div className="search">
                        <div className="filter">
                            <span><FiFilter/></span>
                            <h1>Bộ lọc</h1>
                        </div>
                        <input type="text"></input>
                        <span className="iconSearch"><RiSearchLine/></span>
                    </div>
                </div>
                <div className="elseMiddleHeader">
                    <Link className="cart">
                       <span className="iconCart"><GrShop/> <sup className="numberCart">0</sup></span>
                    </Link>
                </div>
            </div>
            <div className="navbar">
                <div className="navbarContent">
                    <Link className="linkNavbar"><h1>Trang chủ</h1></Link>
                    <Link className="linkNavbar"><h1>Giới thiệu</h1></Link>
                    <Link className="linkNavbar"><h1>Sản phẩm</h1></Link>
                    <div className="type">
                        <Link className="linkNavbar"><h1>Thể loại</h1></Link>
                        <span><MdKeyboardArrowDown/></span>
                    </div>
                    <div className="author">
                        <Link className="linkNavbar"><h1>Tác giả</h1></Link>
                        <span><MdKeyboardArrowDown/></span>
                    </div>
                    <Link className="linkNavbar"><h1>Sản phẩm mới nhất</h1></Link>
                    <Link className="linkNavbar"><h1>Liên hệ</h1></Link>
                </div>
            </div>
            <div className="elseHeader">
                <h1>Những quyển sách được nhiều đọc giả quan tâm nhất</h1>
                <div className="slider">
                    <div className="box">
                        <div className="boxContent">
                            <h1>Img</h1>
                            <h1>Content</h1>
                            <span>Cost</span>
                            <span>Quality</span>
                            <span>Status</span>
                            <button>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}