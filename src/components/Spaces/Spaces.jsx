import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';



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
  const [is_complete, setIs_Complete] = useState('1');
  const spaces = useSelector ((store) => store.spaces);

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
          is_complete: is_complete,
          user_id: user.id
    
        }}) 
      };


  return (
    <div>
    

      <form onSubmit={addSpace}>

      <input 
      type ="text" 
      placeholder='Add Space'
      name="space_name" 
      value={space_name}
      onChange ={(event)=>setSpace_Name(event.target.value)} />

      <input 
      type ="text" 
      placeholder='Add Image'
      name="image_path" 
      value={image_path}
      onChange ={(event)=>setImage_Path(event.target.value)} />  

      <select
      type ="text" 
      placeholder='Prime Space Achieved'
      name="is_complete" 
      value={is_complete}
      onChange ={(event)=>setIs_Complete(event.target.value)}>
      <option>Yes</option>
      <option>No</option>   
      </select>  

      <button className="btn" type="submit" name="submit" value="Add Room ">Add Space</button> 
      </form>
      <div>
        {JSON.stringify (spaces)};
      </div>
    </div>
  );
}

export default Spaces;
