
import {FaTimes,FaEdit} from 'react-icons/fa'
import Proptypes from 'prop-types'
import Card from "./shared/Card"
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


//import RatingSelect from './RatingSelect'
function Feedbackitem({item}){
    const {deleteFeedback,editFeedback} = useContext(FeedbackContext)
    
    return(
        <Card>
            <div className='num-display'>{item.rating}</div>
            <button onClick={() => deleteFeedback(item._id)}
             className='close'>
                <FaTimes color='purple'/>
                </button>

            <button onClick={() => editFeedback(item)}
             className='edit'>
                <FaEdit  color='purple'/>
                </button>

            <div className='text-display'>{item.text}</div>
        </Card>
    )
}
Feedbackitem.propTypes={
    item:Proptypes.object.isRequired,
}
export default Feedbackitem