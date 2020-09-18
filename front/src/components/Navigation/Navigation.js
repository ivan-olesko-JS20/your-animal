import React from 'react';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import { Container, AppBar, Button, CardActions, CardContent, CssBaseline, CardMedia, Typography, Toolbar, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import ModalRegister from '../Registration/ModalRegister'
import ModalLogin from '../Login/ModalLogin'


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    marginLeft: '30px'
  },
  button: {
    marginRight: '50px'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  auth: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'end',
    // backgroundColor: 'red',

  }
}));


function Navigation() {
  const classes = useStyles();
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  console.log(isAuthenticated);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar className={classes.auth}>
          <div>
            <CameraIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              Your Dog App
          </Typography>
          </div>
          <div >
{/* <<<<<<< HEAD */}
            {isAuthenticated && <Link className={classes.link} to="/privateHome"><Button className={classes.button} color="inherit">Home</Button></Link>}
            {!isAuthenticated && <Link className={classes.link} to="/registration"><Button className={classes.button} color="inherit">Registration</Button></Link>}
            {/* {!isAuthenticated && <Link className={classes.link} to="/login"><Button className={classes.button} color="inherit">Login</Button></Link>} */}
            <Link className={classes.link} to="/secret"><Button className={classes.button} color="inherit">ADD NEW</Button></Link>
            <Link className={classes.link} to="/"><Button className={classes.button} color="inherit">Main</Button></Link>
            {isAuthenticated && <Link className={classes.link} to="/logout"><Button className={classes.button} color="inherit">Logout</Button></Link>}

{/* ======= */}
         
{/* >>>>>>> eab8321fd398c2a9a96304e666a5b9a25cf518e8 */}
          </div>
        </Toolbar>
      </AppBar>
      
{/* <<<<<<< HEAD */}
{/* ======= */}

{/* >>>>>>> eab8321fd398c2a9a96304e666a5b9a25cf518e8 */}
    </React.Fragment>
  );
}


export default Navigation;