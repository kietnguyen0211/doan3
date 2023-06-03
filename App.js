import Header from "./components/header/Header"
import { Link, Route, Routes } from "react-router-dom"
import Body from "./components/body/Body"
import css from "./App.css"
export default function App(){
  return(
    <div className="page">
      <Header/>
      <Body/>
    </div>
  )
}