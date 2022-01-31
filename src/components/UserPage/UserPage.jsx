import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import Spaces from '../Spaces/Spaces';
import { Link, useHistory } from 'react-router-dom';
import './UserPage.css'

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history= useHistory();

  const goToSpaces = () => {
    history.push("/spaces");
  }

  const goToUserSpaces = () => {
    history.push("/userspaces");
  }

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>

      <main className="mainDivHomePage" >
          
          <div className ="mainDivHomePageCol1" onClick={goToSpaces}>
            <h1>Add a Space</h1>
          </div>
          <div className ="mainDivHomePageCol2" onClick={goToUserSpaces}>
            <h1>My Spaces</h1>
          </div>
      </main>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
