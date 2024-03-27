import { Navigate, useNavigate,Routes,Route} from "react-router-dom"


function Post(){
    const status = 200

    const navigate = useNavigate()

   const onClick = () => {
    console.log('hello')
    navigate('about')
   }

    if(status === 404){
        return <Navigate to='/notfound'/>
    }

 return (
    <div>
       <h1>Post</h1>
       <button onClick={onClick}>Click</button>
       <Routes>
        <Route path="/show" element={<h1>hello world</h1>}/>
       </Routes>
    </div>
 )
} 

export default Post
