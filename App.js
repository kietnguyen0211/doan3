import Header from "./components/header/Header"
import { Link, Route, Routes } from "react-router-dom"
import css from "./App.css"
export default function App(){
  return(
    <div>
      <Routes>
        <Route path="/" element={<Header/>}></Route>
      </Routes>
    </div>
  )
}