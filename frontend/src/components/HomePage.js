import React from "react";
import Button from "@material-ui/core/Button";
import ListSection from './ListSection.js'

var styles = {
  root: {
    margin:"auto auto",
    padding:"20px", 
  },
  
}

export default function DisableElevation() {
  return (
    <div>
      <h1>Welcome</h1>
      <div>
        <h3>Registered Users</h3>
        <div class="list-sec" style={styles.root} >
          <ListSection/>
        </div>
      </div>
      <Button variant="contained" color="primary" disableElevation>
        Logout
      </Button>
    </div>
  );
}
