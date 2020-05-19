import React,{useState,useEffect} from 'react';
import axios from 'axios'
import CardComp from './Card'
import './Home.css'

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
        <div className="main-como-blog"> 
            <h2 style={{ margin: "30px" }}>
                The Place Where You Can Find All news of animes
            </h2>

            <input
            className="search-blog"
            name="serach"
            placeholder="Enter Film blog"
            />
            <div className="container-blog">

                {error ? 
                <div>error on get data</div>:
                (
                    blogs.map((blog) => <CardComp key={blog._id} item={blog} />)
                )
                }
            </div>
        </div>
    )
}
export default Home