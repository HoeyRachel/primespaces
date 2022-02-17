import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { TextField, FormControl, MenuItem, Button, InputLabel, Select, Grid, Card, CardContent, CardActions, Typography, Modal, Box, Paper} from '@mui/material';



// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name Spaces with the name for the new component.
function Spaces(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const [space_name, setSpace_Name] = useState('');
  const user = useSelector((store) => store.user)
  const [image_path, setImage_Path] = useState('');
  const [space_goal, setSpace_Goal] = useState('');
  const spaces = useSelector ((store) => store.spaces);
  const history = useHistory();

  useEffect(()=>{
    dispatch({ type: 'FETCH_SPACES',
              payload: user.id  
    });
  }, [])



  return (
    <div>
      <Card sx={{ maxWidth: 400 }}>
        <CardContent className='singleroomcard'>
        <div>{props.space_name}</div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Spaces;
