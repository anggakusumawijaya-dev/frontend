import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { Button, Typography, Container } from "@material-ui/core";
import "react-owl-carousel2/lib/styles.css";

export const NewsProps = props => {
  return (
    <Container
      style={{
        padding: 0,
        margin: "20px 10px",
        borderRadius: "24px",
        textAlign: "center",
        marginBottom: "150px"
      }}
    >
      <NavLink
        style={{
          display: "inline-block",
          position: "relative",
          textDecoration: "none"
        }}
        to="/news-detail"
        exact
      >
        <Container
          style={{
            position: "relative",
            margin: 0,
            padding: 0
          }}
        >
          <img
            style={{
              borderRadius: "24px",
              width: "100%",
              height: props.imgHeight
            }}
            src={props.img}
            alt="image-slidder"
          />
          <Button
            style={{
              backgroundColor: props.buttonColor,
              fontWeight: "900",
              borderRadius: "24px",
              color: "white",
              marginBottom: "10px",
              position: "absolute",
              top: 20,
              left: 20
            }}
            href="#"
            variant="contained"
          >
            {props.button}
          </Button>
        </Container>
        <Container
          style={{
            minHeight: "150px",
            backgroundColor: props.backgroundColor,
            width: "80%",
            position: "absolute",
            bottom: -100,
            left: "50%",
            transform: "translateX(-50%)",
            border: "1px solid gray",
            borderRadius: "5px",
            padding: 8
          }}
        >
          <Typography style={{ color: "#EC9120" }} variant="h4">
            {props.title}
          </Typography>
          <Typography style={{ marginTop: "10px" }} variant="h5">
            {props.author}
          </Typography>
        </Container>
      </NavLink>
    </Container>
  );
};

export class News extends Component {
  render() {
    return (
      <Container
        style={{
          minHeight: "1600px",
          margin: "0 auto",
          width: "100%",
          padding: 0,
          marginTop: "100px"
        }}
      >
        <Container
          style={{
            backgroundColor: "#F1F0FF",
            borderBottomLeftRadius: "80%",
            width: "50%",
            height: "50%",
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: -1
          }}
        ></Container>
        <Container
          style={{
            backgroundColor: "#F1F0FF",
            borderRadius: "80%",
            width: "70%",
            height: "80%",
            position: "absolute",
            top: "80%",
            left: 0,
            zIndex: -1
          }}
        ></Container>
        <Typography
          component="h1"
          align="center"
          variant="h1"
          style={{ textAlign: "center", color: "#EC9120" }}
        >
          News List
        </Typography>
        <Container
          fixed
          style={{
            width: "1600px",
            minHeight: "2000px",
            paddingTop: 20,
            margin: 0,
            marginTop: 40,
            overflow: "auto",
            borderRadius: "25px"
          }}
        >
          <Container
            fixed
            style={{
              maxHeight: "1200px",
              float: "left",
              marginTop: 20,
              width: "33%"
            }}
          >
            <Container
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                flexDirection: "row",
                borderRadius: "25px",
                flexWrap: "wrap",
                height: "100%",
                padding: 0,
                marginTop: 20
              }}
            >
              <NewsProps
                img={require("../images/b.png")}
                title="Bootstrap"
                lessons="10 Lessons"
                button="music"
                buttonColor="#95D354"
                price="Rp 7.500.000,-"
                backgroundColor="whitesmoke"
              />
              <NewsProps
                img={require("../images/html.png")}
                title="Membangun Corporate Website menggunakan HTML dan CSS"
                lessons="10 Lessons"
                button="medicine"
                buttonColor="#603DBB"
                price="Rp 7.500.000,-"
                backgroundColor="whitesmoke"
              />
              <NewsProps
                img={require("../images/jquery.png")}
                title="Mendesign Web Interaktif dan Membuat Game dengan JQuery"
                lessons="10 Lessons"
                button="nodejs"
                buttonColor="red"
                price="Rp 7.500.000,-"
                backgroundColor="whitesmoke"
              />
              <NewsProps
                img={require("../images/laravel.png")}
                title="E Commerce Using PHP Laravel"
                lessons="10 Lessons"
                button="music"
                buttonColor="#95D354"
                price="Rp 7.500.000,-"
                backgroundColor="whitesmoke"
              />
              <NewsProps
                img={require("../images/node-js-basic.png")}
                title="Node Js Basic"
                lessons="10 Lessons"
                button="medicine"
                buttonColor="#603DBB"
                price="Rp 7.500.000,-"
                backgroundColor="whitesmoke"
              />
              <NewsProps
                img={require("../images/b.png")}
                title="Bootstrap"
                lessons="10 Lessons"
                button="nodejs"
                buttonColor="red"
                price="Rp 7.500.000,-"
                backgroundColor="whitesmoke"
              />
            </Container>
          </Container>
          <Container
            fixed
            style={{
              maxHeight: "1200px",
              float: "left",
              marginTop: 20,
              width: "33%"
            }}
          >
            <Container
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                borderRadius: "25px",
                flexWrap: "wrap",
                height: "100%",
                padding: 0,
                marginTop: 20
              }}
            >
              <NewsProps
                img={require("../images/php.png")}
                imgHeight="350px"
                title="Membuat Web Company Profile beserta CMS (Back End) dengan PHP Fundamental"
                lessons="10 Lessons"
                button="Web"
                buttonColor="#95D354"
                price="Rp 7.500.000,-"
                backgroundColor="whitesmoke"
              />
              <NewsProps
                img={require("../images/react.png")}
                imgHeight="550px"
                title="E Commerce dengan React Js"
                lessons="10 Lessons"
                button="nodejs"
                buttonColor="red"
                price="Rp 7.500.000,-"
                backgroundColor="whitesmoke"
              />
              <NewsProps
                img={require("../images/ux.png")}
                imgHeight="350px"
                title="UX Design For Website"
                lessons="10 Lessons"
                button="nodejs"
                buttonColor="red"
                price="Rp 7.500.000,-"
                backgroundColor="whitesmoke"
              />
              <NewsProps
                img={require("../images/ux.png")}
                imgHeight="550px"
                title="UX Design For Website"
                lessons="10 Lessons"
                button="nodejs"
                buttonColor="red"
                price="Rp 7.500.000,-"
                backgroundColor="whitesmoke"
              />
              <NewsProps
                img={require("../images/xd.png")}
                imgHeight="350px"
                title="UI Design For Website and Mobile with Adobe XD"
                lessons="10 Lessons"
                button="nodejs"
                buttonColor="red"
                price="Rp 7.500.000,-"
                backgroundColor="whitesmoke"
              />
              <NewsProps
                img={require("../images/b.png")}
                imgHeight="550px"
                title="Bootstrap"
                lessons="10 Lessons"
                button="nodejs"
                buttonColor="red"
                price="Rp 7.500.000,-"
                backgroundColor="whitesmoke"
              />
            </Container>
          </Container>
          <Container
            fixed
            style={{
              maxHeight: "1200px",
              float: "left",
              marginTop: 20,
              width: "33%"
            }}
          >
            <Container
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                borderRadius: "25px",
                flexWrap: "wrap",
                height: "100%",
                padding: 0,
                marginTop: 20
              }}
            >
              <NewsProps
                img={require("../images/ux.png")}
                imgHeight="600px"
                title="UX Design For Website"
                lessons="10 Lessons"
                button="music"
                buttonColor="#95D354"
                price="Rp 7.500.000,-"
                backgroundColor="whitesmoke"
              />
              <NewsProps
                img={require("../images/b.png")}
                imgHeight="400px"
                title="Bootstrap"
                lessons="10 Lessons"
                button="nodejs"
                buttonColor="red"
                price="Rp 7.500.000,-"
                backgroundColor="whitesmoke"
              />
              <NewsProps
                img={require("../images/php.png")}
                imgHeight="600px"
                title="PHP Elite"
                lessons="10 Lessons"
                button="music"
                buttonColor="#95D354"
                price="Rp 7.500.000,-"
                backgroundColor="whitesmoke"
              />
              <NewsProps
                img={require("../images/php.png")}
                imgHeight="400px"
                title="Membuat Web Company Profile beserta CMS (Back End) dengan PHP Fundamental"
                lessons="10 Lessons"
                button="nodejs"
                buttonColor="red"
                price="Rp 7.500.000,-"
                backgroundColor="whitesmoke"
              />
              <NewsProps
                img={require("../images/html.png")}
                imgHeight="600px"
                title="Membangun Corporate Website menggunakan HTML dan CSS"
                lessons="10 Lessons"
                button="music"
                buttonColor="#95D354"
                price="Rp 7.500.000,-"
                backgroundColor="whitesmoke"
              />
              <NewsProps
                img={require("../images/react.png")}
                imgHeight="400px"
                title="Building Apps Android & IOS with React Native (Hybrids Apps)"
                lessons="10 Lessons"
                button="nodejs"
                buttonColor="red"
                price="Rp 7.500.000,-"
                backgroundColor="whitesmoke"
              />
            </Container>
          </Container>
        </Container>
      </Container>
    );
  }
}
