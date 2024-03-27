import { createContext, useState, useEffect } from "react";
//const express = require ('express');
//import {v4 as uuidv4} from "uuid"


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{
    const [isLoading, setisLoading] = useState(true)
    const [feedback,setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        edit: false
    })

    useEffect(()=>{
      fetchFeedback()  
    }, [])

    //fetch feedback 
    const fetchFeedback = async () => {
     const response = await fetch(
        `https://ui-feed-backend.onrender.com/api/list`
     )
     const data = await response.json()
    
    setFeedback(data)
     setisLoading(false)
    }
    
     //update feedback
    const updateFeedback = async (id,updItem) =>{
        const response = await fetch(`https://ui-feed-backend.onrender.com/api/update-feedback/${id}`,{
           method:'PUT',
           headers:{
            'Content-Type':'application/json',
           } ,
           body:JSON.stringify(updItem)
        })

        const data = await response.json()

        setFeedback(
            feedback.map((item) => (item._id === id ? {...item,...updItem} :item))
        )
    }


   
    //add feedback
    const addFeedback = async (newFeedback) => {
        const response = await fetch('https://ui-feed-backend.onrender.com/api/add-feedback',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(newFeedback),
        })

        const data= await response.json()

        setFeedback([data, ...feedback])

    }


   //delete feedback
    const deleteFeedback= async(id)=>{
        if(window.confirm(`Are you sure you want to delete? ${id}`)){
            await fetch(`https://ui-feed-backend.onrender.com/api/delete-feedback/${id}`, {method: 'DELETE'})

            setFeedback(feedback.filter((item) => item._id !==id))
        }
    }

    const editFeedback =(item) => {
        setFeedbackEdit({
            item,
            edit:true
        })
 
    }
    
    return (
        <FeedbackContext.Provider
        value={{
            feedback,
            deleteFeedback,
            addFeedback,
            isLoading,
            editFeedback,
            feedbackEdit,
            updateFeedback,

        }}
       >
        {children}
       </FeedbackContext.Provider> 
    )
}

export default FeedbackContext
