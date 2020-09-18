import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import Header from '../Header/Header';
import Post from '../Post/Post';

const Home = () => {

   const [post,setPost] = useState([]);

   useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/posts')
       .then(res=>  res.json())
       .then(data =>  setPost(data))
   },[])
    return (
        <div>
            
            {
                post.map(postList=> <Post postList={postList} >  </Post>)
            }
        </div>
    );
};

export default Home;