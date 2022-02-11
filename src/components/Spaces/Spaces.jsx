import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { TextField, FormControl, MenuItem, Button, InputLabel, Select, Grid, Card, CardContent, CardActions, Typography, Modal, Box, Paper} from '@mui/material';
import './Spaces.css'


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

  const addSpace = (event) => {
        event.preventDefault();
        dispatch({
        type: 'POST_SPACE',
        payload: {
          space_name: space_name,
          image_path: image_path,
          space_goal: space_goal,
          is_complete: false,
          user_id: user.id
    
        }}) 
        history.push("/userspaces");
      };


  return (
    <div>
      <form onSubmit={addSpace}>
      <TextField
              className="newspacename"
              style={{'margin-right':'30px'}}
              label="Space Goal Name"
              variant="outlined"
              autoComplete= "off"
              type="text"
              name="spacegoalname"
              required
              value={space_name}
              onChange={(event) => setSpace_Name(event.target.value)}
            />

      <TextField
              className="newspacegoalimage"
              style={{'margin-right':'30px'}}
              label="Space Goal Image"
              variant="outlined"
              autoComplete= "off"
              type="text"
              name="spacegoalimage"
              required
              value={image_path}
              onChange={(event) => setImage_Path(event.target.value)}
            />

      <TextField
              className="newspacegoal"
              style={{'margin-right':'60px'}}
              label="Describe Space Goal"
              variant="outlined"
              autoComplete= "off"
              type="text"
              name="newspacegoal"
              maxRows={4}
              rows={5}
              required
              value={space_goal}
              onChange={(event) => setSpace_Goal(event.target.value)}
            />

      <button className="btn" type="submit" name="submit" value="Add Room ">Add Space</button> 
      </form>

     
    </div>
  );
}

export default Spaces;
