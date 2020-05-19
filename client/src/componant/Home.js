import React,{useState,useEffect} from 'react';
import axios from 'axios'
import CardComp from './Card'
import { BackTop } from 'antd';
import './Home.css'

// get all blogs to display on home page 
function Home(){
    const [blogs,setBlogs]=useState([]);
    const [error,setError]=useState();
    const [search,setSearch]=useState([]);


    useEffect(()=>{
        axios.get("/api/v1/blogs")
        .then(({data:{data}}) =>{
            setBlogs(data);
        })
        .catch((error) => {
            setError(error);
        });
    },[])

    const handelSearch=({target:{value}})=>{
        if(value){
        const s=blogs.filter(({title})=>title.includes(value.trim()))
        setSearch(s)
        console.log(s);
        }else{
            console.log();
        }
    }
    const style = {
        height: 40,
        width: 40,
        lineHeight: '40px',
        borderRadius: 4,
        backgroundColor: '#1088e9',
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
      };

    return(
        <div className="main-como-blog"> 
            <h2 style={{ margin: "30px" }}>
                The Place Where You Can Find All news of animes
            </h2>

            <input
            className="search-blog"
            name="serach"
            placeholder="Enter title blog"
            onChange={handelSearch}
            />
            <div className="container-blog">

                {error ? 
                <div>error on get data</div>:
                (
                    blogs.map((blog) => <CardComp key={blog._id} item={blog} />)
                )
                }
                <div style={{ height: '50vh', padding: 8 }}>
                    <BackTop> <div style={style}>UP</div></BackTop></div>
                </div>
        </div>
    )
}
export default Home