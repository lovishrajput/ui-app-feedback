
//import {motion, AnimatePresence} from 'framer-motion'
//import Proptypes from 'prop-types'
import { useContext } from 'react'
import Feedbackitem from './Feedbackitem'
import FeedbackContext from '../context/FeedbackContext'
import { AnimatePresence } from 'framer-motion'
import Spinner from './shared/Spinner'


function Feedbacklist(){
    const {feedback} = useContext(FeedbackContext)

  if (!feedback || feedback.length === 0){
    return <p>No Feedback</p>
  }
    
 
  return(
        <div className="feedback-list">
   
        {feedback.map((item)=>(
            <Feedbackitem 
            key={item._id} 
            item={item}
            
            />
        ))}
        </div>
  )
        
        } 

export default Feedbacklist