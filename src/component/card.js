import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    height:365,
    margin:15
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  desc:{
    height:30
  },
  btn_cart:{
    height:35
  }
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();


  return (
    <Card className={classes.root} key={props.index}>
      <CardHeader
       
        title={props.title}
      
      />
      <CardMedia
        className={classes.media}
        image="/122.png"
        title="Paella dish"
      />
      <CardContent>
        <Typography className={classes.desc} variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>

     

      <CardActions disableSpacing>
      <Grid container spacing={3}>
      <Grid item xs={6} 
      container
      direction="col"
      justify="flex-start">
                    
          <Typography gutterBottom variant="h5" component="h4">
            {props.price}$ <br/>
          <Typography variant="body2" color="textSecondary" component="p">
            Items in stock ({props.stock})
          </Typography>
          </Typography>
            
      </Grid>
      <Grid item xs={6} container
        direction="row"
        justify="center">
        <Button variant="contained" color="primary" size="small" className={classes.btn_cart}>
          Add Cart
        </Button>
      </Grid>
          </Grid>
      </CardActions>
     
    </Card>
  );
}
