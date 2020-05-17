import React,{useState,useEffect} from 'react';
import axios from 'axios'

// get all blogs to display on home page 
function Home(){
    const [blogs,setBlogs]=useState([]);
    const [error,setError]=useState();


    useEffect(()=>{
        axios.get("/api/v1/blogs")
        .then(({data:{data}}) =>{
            setBlogs(data);
        })
        .catch((error) => {
            setError(error);
        });
    },[])

    return(
        <div> 
            {error ? 
            <div>error on get data</div>:
            //here card componant to dislay blogs object 
            <div>{blogs.map((el,index)=><div key={index}>{el.title}</div>)}</div> }
        </div>
    )
}
export default Home