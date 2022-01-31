import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import { Grid, Item, Typography, Box, Card, CardContent, CardActions, TextField, Button } from "@material-ui/core";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name UserSpaceList with the name for the new component.
function UserSpaceList(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);


  return (
    <Grid container>
     <Grid item xs ={3}>
     </Grid>
        <Card sx={{ maxWidth: 400 }}>
        <CardContent>
          <p>{props.space.space_name}</p>
          <p>{props.space.image_path}</p>
          <p> {props.space.is_complete} </p>
          <p> {props.space.space_goal}</p>
          </CardContent>
        </Card>
    </Grid>
  );
}

export default UserSpaceList;
