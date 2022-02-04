import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { Grid, Item, Typography, Box, Card, CardContent, CardActions, TextField, Button } from "@material-ui/core";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name UserSpaceList with the name for the new component.
function UserSpaceList(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const spaces = useSelector ((store) => store.spaces);

  useEffect(()=>{
    dispatch({ type: 'FETCH_SPACES',
          payload: spaces.user_id
    });
  }, [])


  return (
    <Grid container>
     <Grid item xs ={3}>
     </Grid>
        <Card sx={{ maxWidth: 400 }}>
        <CardContent>
          <p>{props.spaces.user_id}</p>
          <p>{props.spaces.space_name}</p>
          <img src={props.spaces.image_path}></img>
          <p> {props.spaces.is_complete} </p>
          <p> {props.spaces.space_goal}</p>
          </CardContent>
        </Card>
    </Grid>
  );
}

export default UserSpaceList;
