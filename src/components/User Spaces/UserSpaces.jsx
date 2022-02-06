import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import UserSpaceList from '../UserSpaceList/UserSpaceList';
import { Grid, Item, Typography, Box, Card, CardContent, CardActions, TextField, Button } from "@material-ui/core";



function UserSpaces(props) {
  // get the Users Spaces
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const spaces = useSelector ((store) => store.spaces);
  const user = useSelector ((store) => store.user);

  useEffect(()=>{
    dispatch({ type: 'FETCH_SPACES',
          payload: user.id
    });
  }, [])


  return (
    <Grid container>
      {spaces.map (space => 
    //  <Grid item xs ={3}>
    //  </Grid>
        <Card sx={{ maxWidth: 400 }}>
        <CardContent >
          
          <p>{space.space_name}</p>
          <img src={space.image_path} className='cardImage'></img>
          <p> {space.is_complete} </p>
          <p> {space.space_goal}</p>
          
         
          </CardContent>
        </Card>
           )}
    </Grid>
  
  ); 
       
    
  
}

export default UserSpaces;
