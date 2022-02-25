import React, { useState, useEffect } from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import useStyles from "./Navbar.style";
import memories from "../../images/undraw_moments_0y20.svg";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const location = useLocation();
  const logout = () => {
    dispatch({type: 'LOGOUT' })
    navigate('/');
    setUser(null)
  }

  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <AppBar position="static" color="inherit" className={classes.appBar}>
      <div className={classes.brandContainer}>
        <Typography
          variant="h2"
          align="center"
          component={Link}
          to="/"
          className={classes.heading}
        >
          Ricordi
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="80"
        />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.useName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Esci
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Registrati
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
