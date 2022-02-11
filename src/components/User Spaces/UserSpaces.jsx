import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import UserSpaceList from '../UserSpaceList/UserSpaceList';
import { Grid, Item, Typography, Box, Card, CardContent, CardActions, TextField, Button } from "@material-ui/core";
import './UserSpaces.css';


function UserSpaces(props) {
  // get the Users Spaces
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const spaces = useSelector ((store) => store.spaces);
  const user = useSelector ((store) => store.user);
  const [completed, setIsCompleted] = useState(false);

  useEffect(()=>{
    dispatch({ type: 'FETCH_SPACES',
          payload: user.id
    });
  }, [])

  const handleCheckboxChange = (id) => {
    console.log ('in HandleCheckboxChange', id);
    setIsCompleted(!completed);
    dispatch ({
      type: 'UPDATE_SPACE',
      payload: id
    })
  }

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
        <CardContent className='roomCards' >
          <h3 className='cardTitle'>{space.space_name}</h3>
          <img src={space.image_path} className='cardImage'></img>
          <p className='cardGoal'> {space.space_goal}</p>
        <div>
          <input type='checkbox' id='spaceCompleted' className='spaceCompletedCheckbox' value='completed' label='Space Completed?'
          onChange={()=> handleCheckboxChange(space.id)} />
          
          <span>Space Completed?</span>
        </div>
        <div>
          <Button className='deleteSpaceButton_sizeSm' onClick={ ()=> deleteSpace( space.id ) }> Delete Space </Button>
        </div>
          </CardContent>
        </Card>
           )}
    </Grid>
  
  ); 
       
    
  
}

export default UserSpaces;
