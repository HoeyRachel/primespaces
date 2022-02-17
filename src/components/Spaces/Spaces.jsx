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
      <div className='addspaceheaderdiv'>
        <h2>Create a New Space Goal</h2>
      </div>
        <div className='spacenameinputdiv'>
          <TextField
              className="spacegoalname"
              style={{'margin-right':'30px', 'width': '400px'}}
              label="enter space name"
              variant="outlined"
              autoComplete= "off"
              type="text"
              name="spacegoalname"
              required
              value={space_name}
              onChange={(event) => setSpace_Name(event.target.value)}
            />
        </div>
        <div className='spaceimageinputdiv'>
          <TextField
              className="newspacegoalimage"
              style={{'margin-right':'30px', 'width': '400px'}}
              label="enter space image url"
              variant="outlined"
              autoComplete= "off"
              type="text"
              name="spacegoalimage"
              required
              value={image_path}
              onChange={(event) => setImage_Path(event.target.value)}
            />
        </div>
        <div className='spacegoalinputdiv'>
          <TextField
              className="spacegoaldescription"
              style={{'margin-right':'30px', 'width': '400px'}}
              label="enter space goal description"
              variant="outlined"
              autoComplete= "off"
              type="text"
              name="newspacegoal"
              multiline
              maxRows={4}
              rows={5}
              required
              value={space_goal}
              onChange={(event) => setSpace_Goal(event.target.value)}
            />
        </div>
        <div className='buttondiv'>
          <button className="btn" type="submit" name="submit" value="Add Room ">Add Space</button> 
        </div>
      </form>

     
    </div>
  );
}

export default Spaces;
