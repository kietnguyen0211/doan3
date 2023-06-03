import { Link, Routes, Route } from "react-router-dom"
import Home from "../home/Home"
export default function Body(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
            </Routes>
        </div>
    )
}