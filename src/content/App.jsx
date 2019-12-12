import React from "react";
import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";

import {
  Container,
  Button,
  CssBaseline,
  Link,
  AppBar,
  Toolbar,
  Typography
} from "@material-ui/core";

import Home from "./Home.jsx";
import AboutUs from "./AboutUs.jsx";
import { Courses } from "./Courses.jsx";
import CoursesDetail from "./CoursesDetail.jsx";
import { News } from "./News.jsx";
import NewsDetail from "./NewsDetail.jsx";
import Contact from "./Contact.jsx";
import Register from "./Register.jsx";
import Login from "./Login.jsx";

import useStyles from "../styles/Style";

function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      style={{ backgroundColor: "#3F51B5", color: "whitesmoke" }}
    >
      &copy; Copyright_
      <Link color="inherit" href="https://localhost:3000/">
        studiokoding_
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Album() {
  const classes = useStyles();

  return (
    <Router>
      <React.Fragment>
        <CssBaseline />
        <AppBar
          position="fixed"
          // color="primary"
          elevation={0}
          className={classes.appBar}
          
        >
          <Toolbar className={classes.toolbar} >
            <Typography
              variant="h2"
              component="h1"
              noWrap
              className={classes.toolbarTitle}
            >
              <NavLink to="/" className={classes.toolbarTitle}>
                {/* <b>studiokoding</b> */}
                <img src={require(`../images/logo-codingstudio.png`)} width="20%" alt="banner" />
              </NavLink>
            </Typography>
            <nav>
              <NavLink to="/" exact className={classes.link}>
                Home
              </NavLink>
              <NavLink to="/about-us" className={classes.link}>
                About Us
              </NavLink>
              <NavLink to="/courses" className={classes.link}>
                Courses
              </NavLink>
              <NavLink to="/news" className={classes.link}>
                News
              </NavLink>
              <NavLink to="/contact" className={classes.link}>
                Contact
              </NavLink>
            </nav>
            <NavLink to="/register" className={classes.link}>
              <Button className={classes.registerButton} variant="contained">
                Register
              </Button>
            </NavLink>
            <NavLink to="/login">
              <Button className={classes.loginButton} variant="contained">
                Login
              </Button>
            </NavLink>
          </Toolbar>
        </AppBar>

        <main style={{ margin: 0, padding: 0 }}>
          {/* Hero unit */}
          <Route exact path="/" component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/courses" component={Courses} />
          <Route path="/news" component={News} />
          <Route path="/contact" component={Contact} />
          <Route path="/register" component={Register} />
          
          <Route path="/login" component={Login} />
          <Route path="/courses-detail" component={CoursesDetail} />
          <Route path="/news-detail" component={NewsDetail} />
        </main>

        {/* Footer */}
        <footer className={classes.footer}>
          <Container className={classes.footerContainer}>
            <Typography
              variant="h3"
              component="h1"
              noWrap
              className={classes.footerTitle}
            >
              {/* studiokoding */}
              <img src={require(`../images/logo-codingstudio.png`)} width="100%" alt="banner" />
              
            </Typography>
            <Typography variant="h6" align="center" gutterBottom>
              Berdiri sejak tahun 2003 telah memiliki lebih dari 15.000 peserta
              dan sangat berpengalaman
            </Typography>
          </Container>
          <Container className={classes.footerContainer}>
            <Typography variant="h6" align="center" gutterBottom>
              Popular Courses :
            </Typography>
            <Typography variant="h6" align="center" component="p">
              Web & Mobile Programming
            </Typography>
            <Typography variant="h6" align="center" component="p">
              Digital Marketing
            </Typography>
            <Typography variant="h6" align="center" component="p">
              Online Business
            </Typography>
          </Container>
          <Container className={classes.footerContainer}>
            <Typography
              variant="h6"
              align="center"
              style={{ marginBottom: "24px" }}
              gutterBottom
            >
              Weekly Newsletter :
            </Typography>
            <Button
              className={classes.loginButton}
              href="#"
              variant="contained"
            >
              Subscribe to our Newsletter
            </Button>
          </Container>
        </footer>
        <Copyright />
        {/* End footer */}
      </React.Fragment>
    </Router>
  );
}
