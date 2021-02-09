import React from "react";
import Button from "@material-ui/core/Button";
import ListSection from './ListSection.js'
import { useHistory } from "react-router-dom";

var styles = {
  root: {
    margin:"auto auto",
    padding:"20px", 
  },
  
}

export default function DisableElevation() {
  let history=useHistory()

  const logoutHandler=(e)=>{
    e.preventDefault()
    console.log("logout")
    //logout history patchup
    setTimeout(()=>{
      history.push('/')
    },2000)
  }

  return (
    <div>
      <h1>Welcome</h1>
      <div>
        <h3>Registered Users</h3>
        <div class="list-sec" style={styles.root} >
          <ListSection/>
        </div>
      </div>
      <Button variant="contained" color="primary" disableElevation onClick={logoutHandler}>
        Logout
      </Button>
    </div>
  );
}
