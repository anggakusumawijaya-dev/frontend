import React, { Component } from "react";

import { Button, Typography, Container, Paper, Grid } from "@material-ui/core";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";

import Slider from "react-slick";
import { relative } from "path";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      json: [],
      photos: [],
      liputan: [],

      itemNo: 1,
      loop: true,
      nav: false,
      autoplay: true
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            json: result
          });
        },
        error => {
          console.log(error);
        }
      );

    fetch("https://codingstudio.herokuapp.com/slider")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            photos: result.response
          }, () => console.log(this.state.photos));
        }
      ).catch(error => {
        console.log(error);
      })
  }

  // TODO: CAROUSEL API

  render() {
    const options = {
      items: this.state.itemNo,
      loop: this.state.loop,
      nav: this.state.nav,
      rewind: this.state.rewind,
      autoplay: this.state.autoplay
    };

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };

    const liputanSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true
    };

    const testimonySettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <React.Fragment>
        {this.state.photos.length &&
          <OwlCarousel options={options} style={{marginTop: 10}}>
            {this.state.photos.map((carousel, i) => (
              <img src={carousel.img_slider} />
              ))}
          </OwlCarousel>
        }
        {/* Liputan start */}
        <Container fixed>
          <Typography
            component="h3"
            align="center"
            variant="h3"
            style={{ marginTop: 40, marginBottom: 20 }}
          >
            Mamastudio pernah diliput
          </Typography>

          <Slider {...liputanSettings}>
            <Grid item xs={12} md={8}>
              <img
                style={{ width: "100%" }}
                src={require("../images/01.png")}
                alt="container-image"
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <img
                style={{ width: "100%" }}
                src={require("../images/01.png")}
                alt="container-image"
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <img
                style={{ width: "100%" }}
                src={require("../images/01.png")}
                alt="container-image"
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <img
                style={{ width: "100%" }}
                src={require("../images/01.png")}
                alt="container-image"
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <img
                style={{ width: "100%" }}
                src={require("../images/01.png")}
                alt="container-image"
              />
            </Grid>
          </Slider>
        </Container>
        {/* Liputan end */}

        {/* Testimony start */}
        <Container
          style={{
            marginTop: 80,
            height: "450px"
          }}
        >
          <Container
            style={{
              borderTopLeftRadius: "20px",
              borderBottomLeftRadius: "20px",
              backgroundColor: "#F1F0FF",
              width: "80%",
              height: "400px",
              right: 0,
              position: "absolute"
            }}
          >
            <Slider
              style={{
                width: "500px",
                position: "absolute",
                top: "50%",
                height: "300px",
                left: -200,
                transform: "translateY(-50%)"
              }}
              {...testimonySettings}
            >
              <Grid item xs={11} md={11}>
                <img
                  style={{
                    borderRadius: "5px",
                    border: "1px solid whitesmoke",
                    width: "500px",
                    height: "300px"
                  }}
                  src={require("../images/republika.jpg")}
                  alt="slider-image"
                />
              </Grid>
              <Grid item xs={11} md={11}>
                <img
                  style={{
                    color: "#EC9120",
                    borderRadius: "10px",
                    width: "500px",
                    height: "300px"
                  }}
                  src={require("../images/republika.jpg")}
                  alt="slider-image"
                />
              </Grid>
            </Slider>
          </Container>
          <Container
            style={{
              width: "55%",
              height: "400px",
              right: 0,
              position: "absolute",
              paddingTop: "40px"
            }}
          >
            <Typography
              component="h3"
              variant="h3"
              style={{ marginBottom: 20, fontWeight: 700, textAlign: "center" }}
            >
              Testimony
            </Typography>
            <Typography
              component="h3"
              variant="h3"
              align="center"
              style={{ color: "#EC9120", marginBottom: 20 }}
            >
              What Students Say About Us
            </Typography>
            <Typography
              component="h4"
              variant="h4"
              style={{ marginBottom: 20 }}
            >
              Minuteness of the parts
            </Typography>
            <Typography component="h5" variant="h5" style={{ marginBottom: 20 }}>
              What looked like a small patch of purple grass, above five feet
              square, was moving across the sand in their direction. When it
              came near enough he perceived.
            </Typography>
          </Container>
        </Container>

        {/* Karya murid start */}
        <Container fixed style={{ marginTop: 40 }}>
          <Typography
            component="h3"
            align="center"
            variant="h3"
            style={{ marginBottom: 20 }}
          >
            Karya Murid dan Instruktur Mamastudio
          </Typography>
          <Slider {...settings}>
            <Grid item xs={11} md={11}>
              <img
                style={{ width: "100%" }}
                src={require("../images/republika.jpg")}
                alt="slider-image"
              />
            </Grid>
            <Grid item xs={11} md={11}>
              <img
                style={{ width: "100%" }}
                src={require("../images/republika.jpg")}
                alt="slider-image"
              />
            </Grid>
            <Grid item xs={11} md={11}>
              <img
                style={{ width: "100%" }}
                src={require("../images/republika.jpg")}
                alt="slider-image"
              />
            </Grid>
            <Grid item xs={11} md={11}>
              <img
                style={{ width: "100%" }}
                src={require("../images/republika.jpg")}
                alt="slider-image"
              />
            </Grid>
            <Grid item xs={11} md={11}>
              <img
                style={{ width: "100%" }}
                src={require("../images/republika.jpg")}
                alt="slider-image"
              />
            </Grid>
            <Grid item xs={11} md={11}>
              <img
                style={{ width: "100%" }}
                src={require("../images/republika.jpg")}
                alt="slider-image"
              />
            </Grid>
          </Slider>
        </Container>
        {/* Karya murid end */}

        {/* Features start */}
        <Container
          style={{
            marginTop: 60,
            height: "500px"
          }}
        >
          <Container
            style={{
              borderTopRightRadius: "20px",
              borderBottomRightRadius: "20px",
              backgroundColor: "#F1F0FF",
              width: "80%",
              height: "500px",
              left: 0,
              position: "absolute"
            }}
          >
            <img
              src={require("../images/republika.jpg")}
              alt="slider-image"
              style={{
                borderRadius: "10px",
                width: "500px",
                height: "80%",
                position: "absolute",
                top: "50%",
                right: -200,
                transform: "translateY(-50%)"
              }}
            />
          </Container>
          <Container
            style={{
              width: "55%",
              height: "500px",
              left: 0,
              position: "absolute",
              padding: "40px"
            }}
          >
            <Typography
              component="h3"
              variant="h3"
              style={{ marginBottom: 20, fontWeight: 700, textAlign: "center" }}
            >
              Features
            </Typography>
            <Typography
              component="h3"
              variant="h3"
              style={{ color: "#EC9120", marginBottom: 20 }}
            >
              Premium Courses
            </Typography>
            <Typography
              component="h6"
              variant="h6"
              style={{ marginBottom: 20 }}
            >
              Lifts the horizon
            </Typography>
            <Typography component="h6" variant="h6" style={{ marginBottom: 20 }}>
              What looked like a small patch of purple grass, above five feet
              square, was moving across the sand in their direction.
            </Typography>
            <Typography component="h3" variant="h3" style={{ fontWeight: 600 }}>
              Free Support
            </Typography>
            <Typography
              component="h6"
              variant="h6"
              style={{ marginBottom: 20, fontWeight: 400 }}
            >
              Truly it was a great journey, and in it I met with many, whom to
              know.
            </Typography>
            <Typography component="h3" variant="h3" style={{ fontWeight: 600 }}>
              Big Bonuses
            </Typography>
            <Typography
              component="h6"
              variant="h6"
              style={{ marginBottom: 20, fontWeight: 400 }}
            >
              Truly it was a great journey, and in it I met with many, whom to
              know.
            </Typography>
          </Container>
        </Container>
        {/* Features end */}

        {/* Prestasi alumni start */}
        <Container fixed style={{ marginTop: 60 }}>
          <Typography
            component="h1"
            align="center"
            variant="h3"
            style={{ marginBottom: 20 }}
          >
            Prestasi Alumni Mamastudio
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography component="h5" variant="h5">
                Semenjak tahun 2014 pada acara e-transparancy award. Mamastudio
                ditunjuk sebagai konsultan untuk memberikan masukan atas
                website-website milik kementerian dan lembaga RI. Beberapa
                website kementerian telah dibangun dengan mengikuti
                tahapan-tahapan pembuatan website yang sesuai dengan
                standarisasi website yang baik, serta peraturan. Contohnya
                adalah website milik kementerian kelautan, kementerian agrarian
                dan beberapa kementerian lain telah dibuat oleh Mamastudio.
                Sampai saat inipun Mamastudio masih rutin memberikan masukan dan
                pelatihan pada beberapa kementerian mengenai teknologi terbaru
                dalam bidang website, pemanfaatan social media dan mobile app.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                style={{ width: "100%" }}
                src={require("../images/republika.jpg")}
                alt="Mamastudio-image"
              />
            </Grid>
          </Grid>
        </Container>
        {/* Prestasi alumni end */}
      </React.Fragment>
    );
  }
}

export default Home;
