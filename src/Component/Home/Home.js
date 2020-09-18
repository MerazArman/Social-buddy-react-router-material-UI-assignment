import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
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
            <h1>    post detail: {post.length}</h1>
            {
                post.map(postList=> <Post postList={postList} >  </Post>)
            }
        </div>
    );
};

export default Home;