import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CommentIcon from '@material-ui/icons/Comment';
import  Comment  from '../Comment/Comment';
import fakeData from '../../fakeData';




const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 800,
      
      margin:'auto'
    },
   
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);






const PostDetails = () => {
    const  {postId} = useParams();
    const   [post,setPost] = useState({});
    const  {title, body}=post;

   useEffect(()=>{
       const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
       fetch(url)
       .then(res=> res.json())
       .then(data=> setPost(data))
   },[])
   

   const  first30 = fakeData.slice(0,40);
   const [comment,setComment]= useState(first30);
   console.log(comment)

  

   const classes = useStyles();
   const [expanded, setExpanded] = React.useState(false);
 
   const handleExpandClick = () => {
     setExpanded(!expanded);
   };
 
    return (
        <div>
            
            <Card className={classes.root}>
            
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent className={classes.media} >
      <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {body}
          
        </Typography>
      </CardContent>
        
        
        
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
        
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Typography component="p">  {comment.length}  </Typography>
          <CommentIcon> </CommentIcon>
          
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        {
                comment.map(commentList=>  <Comment  commentList={commentList} > </Comment> )
            }
        </CardContent>
      </Collapse>
    </Card>
    

  
        </div>
    );
};

export default PostDetails;