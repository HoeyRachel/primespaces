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
  const [checked, setChecked] = useState(false);

  useEffect(()=>{
    dispatch({ type: 'FETCH_SPACES',
          payload: user.id
    });
  }, [])

  // const valueChange = () => {
  //   setChecked(!checked);
  //   return checked;
  // }

  const deleteSpace=(id)=>{
    console.log('in deleteSpaceFunction:', id);
    dispatch (
      { type: 'DELETE_SPACE', 
      payload: id}
    )
  }
  
  // const handleCheckboxChange = (id) => {
  //   console.log('checkbox changed:', id);

  //   // attendanceForEvent.includes(id) ? attendanceForEvent.splice(attendanceForEvent.indexOf(id), 1) 
  //   // : setAttendanceForEvent([...attendanceForEvent, id]);
    
  // }



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
        <div>
          <input type='checkbox' id='spaceCompleted' className='spaceCompletedCheckbox' value='completed' label='Space Completed?' />
          {/* onChange={handleCheckboxChange(spaces.id)} */}
          <span>Space Completed?</span>
        </div>
        <div>
          <Button className='deleteSpaceButton' onClick={ ()=> deleteSpace( space.id ) }> X </Button>
          <span>Delete Space</span>
        </div>
          </CardContent>
        </Card>
           )}
    </Grid>
  
  ); 
       
    
  
}

export default UserSpaces;
