import React, { Component } from "react";

import { Typography, Container, Grid } from "@material-ui/core";
import "react-owl-carousel2/lib/styles.css";

class AboutUs extends Component {
  render() {
    return (
      <Container
        style={{
          marginTop: 100,
          height: "600px"
        }}
      >
        <Container
          style={{
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
            backgroundColor: "#F1F0FF",
            width: "80%",
            height: "600px",
            right: 0,
            position: "absolute"
          }}
        >
          <Grid item xs={11} md={11}>
            <img
              style={{
                width: "500px",
                position: "absolute",
                top: "50%",
                height: "500px",
                left: -200,
                transform: "translateY(-50%)",
                borderRadius: "20px",
                border: "1px solid whitesmoke",
              }}
              src={require("../images/republika.jpg")}
              alt="slider-image"
            />
          </Grid>
        </Container>
        <Container
          style={{
            width: "50%",
            height: "400px",
            right: 80,
            position: "absolute",
            paddingTop: "60px",
            paddingRight: "100px"
          }}
        >
          <Typography
            component="h3"
            variant="h3"
            style={{ marginBottom: 20, fontWeight: 700 }}
          >About us</Typography>
          <Typography
            component="h2"
            variant="h2"
            style={{ color: "#EC9120", marginBottom: 20 }}
          >We Are Experts
          in Elearning</Typography>
          <Typography component="h3" variant="h5" style={{ marginBottom: 20, fontWeight: 700, }}>Kenapa memilih kami</Typography>
          <Typography component="h3" variant="p" style={{ lineHeight: 1.5, fontSize: "20px", fontWeight: 400, marginBottom: 30 }}>Babastudio.com (Web Consultant & Training) telah berdiri lebih dari 10 tahun sejak tahun 2003 dan telah dilengkapi badan hukum. Babastudio.com dalam pengalamannya telah merebut 5 penghargaan ICT Awards (Piala MENKOMINFO) dalam bidang website, sebagai website korporasi terbaik dan juga dalam kategory People Choice. </Typography>
        </Container>
      </Container>
      /* Testimony end */
    );
  }
}

export default AboutUs;
