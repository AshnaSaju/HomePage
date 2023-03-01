import React from "react"
import Middlesection from "../Middlesection/MiddleSection"
import Rightsection from "../Rightsection/Rightsection"
import SideBar from "../Sidebar/Sidebar"
import "./Home.css"
function Home(){
    return(
        <div className="main_container">
            <SideBar/>
         <Middlesection/>
         <Rightsection/>
        </div>
    )
}
export default Home