import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const  {postId} = useParams();
    return (
        <div>
            <h3>  This  is  postDetails {postId} </h3>
        </div>
    );
};

export default PostDetails;