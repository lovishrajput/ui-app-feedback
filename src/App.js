
import AboutIconLink from "./components/AboutIconLink"
import { BrowserRouter as Router, } from "react-router-dom"
//import {v4 as uuidv4} from "uuid"
//import { useState} from "react"
import Header from "./components/Header"
//import Feedbackitem from "./components/Feedbackitem"
//import FeedbackData from './data/FeedbackData'
import Feedbacklist from './components/Feedbacklist'
import Card from "./components/shared/Card"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./components/pages/AboutPages"
import { FeedbackProvider } from "./context/FeedbackContext"





function App(){

    return (
        <FeedbackProvider>
        <Router>
        <Header/>
        <div className="container">  
            <FeedbackForm />
            <FeedbackStats/>
            <Feedbacklist/>

        </div>
        </Router>
        </FeedbackProvider>
    )
    }
 export default App




