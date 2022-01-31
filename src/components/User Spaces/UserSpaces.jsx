import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import UserSpaceList from '../UserSpaceList/UserSpaceList';



function UserSpaces(props) {
  // get the Users Spaces
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('My Spaces');
  const user = useSelector((store) => store.user);
  const spaces = useSelector ((store) => store.spaces);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch({ type: 'FETCH_SPACES',
          payload: spaces.user_id
    });
  }, [])

  return (
    <div>
      <h2>{heading}</h2>
      <div>
      <section className="myspaces">
          {spaces.map(space =>(<UserSpaceList key={spaces.user_id} space={space} />))}
        </section>  
           
       </div>  
       
    </div>
  );
}

export default UserSpaces;
