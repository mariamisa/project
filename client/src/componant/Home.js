import React,{useState,useEffect} from 'react';
import axios from 'axios'
import CardComp from './Card'
import { BackTop,Spin,Alert } from 'antd';
import './Home.css'
import { date } from 'yup';

function Home(){
    const [blogs,setBlogs]=useState([]);
    const [error,setError]=useState();
    const [search,setSearch]=useState('');
    const [searchData,setSearchData]=useState([]);
    const [loaded,setLoaded]=useState(true);

    useEffect(()=>{
        axios.get("/api/v1/blogs")
        .then(({data:{data}}) =>{
            setBlogs(data);
            setLoaded(false)
        })
        .catch((error) => {
            setError(error);
            setLoaded(false)
        });
    },[])

    useEffect(()=>{
            axios.get(`/api/v1/blogs/${search}`)
            .then(({data:{data}}) =>{
                if(date){
                    setSearchData(data);
                }else{
                    setSearch('')
                }
            })
            .catch((error) => {
                setError(error)})
    },[search])

    const handelSearch=({target:{value}})=>{
        if(value){
        setSearch(value)
        }else{
        setSearchData([])
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
                The Place Where You Can Find All news of anime's
            </h2>

            <input
            className="search-blog"
            name="search"
            placeholder="Enter title blog"
            onChange={handelSearch}
            />
            <div className="container-blog">
                {loaded && (<Spin tip="Loading...">
                            <Alert
                                message="data loading"
                                description="data loading ...."
                                type="info" /></Spin>)}

                {error ? (<div>error on get data</div>) : searchData.length ? 
                (searchData.map((blog) => <CardComp key={blog._id} item={blog} />)):
                (blogs.map((blog) => <CardComp key={blog._id} item={blog} />))
                }

                <div style={{ height: '50vh', padding:'8px' }}>
                    <BackTop> <div style={style}>UP</div></BackTop></div>
            </div>
        </div>
    )
}
export default Home