import React from "react"
import Middlesection from "../Middlesection/MiddleSection"
import Rightsection from "../Rightsection/Rightsection"
import SideBar from "../Sidebar/Sidebar"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./Home.css"
import MyPosts from "../MyPosts/MyPosts"
function Home() {
    return (
        <div className="main_container">
            <Router>
            <SideBar />
                <Routes>
                    <Route exact path="/" element={<>
                        <Middlesection />
                        <Rightsection/>
                    </>
                    }/>
                    <Route exact path="/myposts" element={<MyPosts/>} />

                </Routes>
            </Router>
        </div>
    )
}
export default Home