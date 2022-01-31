import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';



function UserSpaces(props) {
  // get the Users Spaces
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('My Spaces');
  const user = useSelector((store) => store.user);
  const spaces = useSelector ((store) => store.spaces);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch({ type: 'FETCH_SPACES',
              payload: user.id  
    });
  }, [])

  return (
    <div>
      <h2>{heading}</h2>
      <div>
        {spaces.map( space => {
          //maps the spaces associated with the User's ID
            const setSpaceDetail = ()=>{
              dispatch({
                  type: 'SET_SPACE_ITEM',
                  payload: {id: space.id, 
                            user_id: space.user_id,
                            space_name: space.space_name, 
                            image_path: space.image_path,
                            is_complete: space.is_complete
                            
                          }
              });//end dispatch
              
          }//end const
         
          return(
           
                <div >
                  
                      <img src={space.image_path}/>
                     
                          <p>{space.room_name}</p>
                          <p> {space.is_complete} </p>
                        <button className="btn btn_sizeSm" onClick={setSpaceDetail}>'View Room Details'</button>
                     
                    
                  
                </div>
           
          )
        
        })}          
      </div>
    </div>
  );
}

export default UserSpaces;
