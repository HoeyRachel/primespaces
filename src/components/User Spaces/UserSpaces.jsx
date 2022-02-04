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
     <Grid item xs ={3}>
     </Grid>
        <Card sx={{ maxWidth: 400 }}>
        <CardContent>
          <p>{spaces.user_id}</p>
          <p>{spaces.space_name}</p>
          <img src={spaces.image_path}></img>
          <p> {spaces.is_complete} </p>
          <p> {spaces.space_goal}</p>
          </CardContent>
        </Card>
    </Grid>
  ); 
       
    
  
}

export default UserSpaces;
