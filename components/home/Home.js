import css from "./Home.css"
import list from "../../imglist.json"
import { useState, useEffect } from "react"
import axios from "axios"
export default function Home(){
    const [data,setData]=useState([])
    const getData = async () => {
        const url = `https://64788a1a362560649a2dfbd8.mockapi.io/list`
        axios
            .get(url)
            .then((res)=>{
                setData(res.data)
                console.log(res.data)
            })
            .catch((error)=>{
                console.log(error)
            })
    }
    useEffect(()  => {
        getData()
    },[])
    const books = list.books
    return(
        <div className="home">
            <div className="bookshelf">
                <div className="bookshelfContent">
                    <div className="bookshelfContentTop">
                        <h1>Tủ sách của Meo</h1>
                        <span>Logo</span>
                    </div>
                    <div className="bookshelfContentElse">
                        <div className="slide">
                            {
                                data.map((value,key)=>{
                                    return(
                                        <div key={key} className="slideContent">
                                            <img src={books[key].img} style={{width:"200px", height:"200px"}}></img>
                                            <h1>{value.name}</h1>
                                            <span>{value.author}</span>
                                            <span>{value.cost} vnđ</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}