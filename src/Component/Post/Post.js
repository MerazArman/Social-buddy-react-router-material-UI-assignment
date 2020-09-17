import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';




const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });


const Post = (props) => {
    const  {title , body ,id} = props.postList;

    const classes = useStyles();
    return (
        <div>

<Card className={classes.root} variant="outlined">
      <CardContent>
       
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {body}
          
        </Typography>
      </CardContent>
      <CardActions>
        
         <Button variant="contained" color="primary">Learn More</Button>
          
       
      </CardActions>
     
    </Card>
       <Link  to={`/post/${id}`}> show More {id}</Link>
        </div>
    );
};

export default Post;



