import React, { useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
//import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

//react router dom
import { Link, useHistory } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  let history = useHistory();

  const classes = useStyles();

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

 /*  const [hState, setHState] = useState("");

  //flag for reply state
  var flag = 1;

  const [replyState, setReplyState] = useState(0); */

  /* 
  Best Practises to secure the password are necessary in this step
  */

  const handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    console.log(loginInfo);
    //send to the backend or say to mongodb Atlas
    
    setTimeout(()=>{
      history.push('/')
    },2000)



    /* flag ? setReplyState(1) : setReplyState(0);
    if (replyState) {

      //simulate
      setTimeout(() => {
        const value = "/";
        setHState({
          ...hState,
          [hState]: value,
        });
        history.push(hState);
      }, 1000);
    } */
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircle />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmission}
          >
            Sign Up
          </Button>
          "Do have an account? <Link to="/">Login"</Link>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
