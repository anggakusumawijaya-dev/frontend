import React, { Component } from "react";

import { Course } from "./Courses";
import { Typography, Container } from "@material-ui/core";
import "react-owl-carousel2/lib/styles.css";

const CourseDetail = props => {
  return (
    <Container
      style={{
        display: "flex",
        borderRadius: "25px",
        flexWrap: "wrap",
        backgroundColor: "#F1F0FF",
        height: "100%",
        padding: 0,
        marginTop: 40,
        paddingTop: 20
      }}
    >
      <Container
        style={{
          width: "40%",
          float: "left",
          margin: 0,
          marginLeft: 10
        }}
      >
        <Course
          img={props.img}
          title={props.title}
          author={props.author}
          lessons={props.lessons}
          button={props.button}
          buttonColor={props.buttonColor}
          backgroundColor="whitesmoke"
        />
      </Container>
      <Container
        style={{
          margin: 0,
          paddingTop: 40,
          width: "55%",
          position: "relative"
        }}
      >
        <Typography
          component="h3"
          variant="h4"
          style={{ marginBottom: 30, fontWeight: 700 }}
        >
          Instructor : {props.author}
        </Typography>
        <Typography
          component="h2"
          variant="h2"
          style={{ color: "#EC9120", marginBottom: 30 }}
        >
          {props.title}
        </Typography>
        <Typography
          component="h3"
          variant="h5"
          style={{ marginBottom: 30, fontWeight: 700 }}
        >
          {props.lessons}
        </Typography>
        <Typography
          component="h3"
          variant="p"
          style={{
            lineHeight: 1.5,
            fontSize: "20px",
            fontWeight: 400,
            marginBottom: 30
          }}
        >
          {props.desc}
        </Typography>
        <Typography
            style={{ color: "purple", position: "absolute", bottom: "20%", right: 0 }}
            variant="h3"
          >
            {props.price}
          </Typography>
      </Container>
    </Container>
  );
};

class CoursesDetail extends Component {
  render() {
    return (
      <Container
        style={{
          minHeight: "600px",
          margin: "0 auto",
          padding: 0,
          marginTop: "100px"
        }}
      >
        <Container
          fixed
          style={{
            margin: "20px",
            paddingTop: 20,
            height: "100%",
            borderRadius: "25px"
          }}
        >
          <Typography
            component="h1"
            align="center"
            variant="h1"
            style={{ textAlign: "center", color: "#EC9120" }}
          >
            Detail Paket Materi
          </Typography>
          <Container
            fixed
            style={{
              height: "90%",
              marginTop: 20,
              width: "100%"
            }}
          >
            <CourseDetail
              img={require("../images/image1.jpg")}
              title="Quantum Computers"
              author="Ivan Cornejo"
              lessons="10 Lessons"
              button="website"
              buttonColor="#50C4EE"
              price="Rp 7.500.000,-"
              desc="
              Babastudio.com (Web Consultant & Training) telah berdiri lebih dari 10
              tahun sejak tahun 2003 dan telah dilengkapi badan hukum.
              Babastudio.com dalam pengalamannya telah merebut 5 penghargaan ICT
              Awards (Piala MENKOMINFO) dalam bidang website, sebagai website
              korporasi terbaik dan juga dalam kategory People Choice.
            "
            />
            <CourseDetail
              img={require("../images/image2.jpg")}
              title="Mechanics"
              author="Chikanso Chima"
              lessons="10 Lessons"
              button="design"
              buttonColor="#EE71C7"
              price="Rp 7.500.000,-"
              desc="
              Babastudio.com (Web Consultant & Training) telah berdiri lebih dari 10
              tahun sejak tahun 2003 dan telah dilengkapi badan hukum.
              Babastudio.com dalam pengalamannya telah merebut 5 penghargaan ICT
              Awards (Piala MENKOMINFO) dalam bidang website, sebagai website
              korporasi terbaik dan juga dalam kategory People Choice.
            "
            />
            <CourseDetail
              img={require("../images/image3.jpg")}
              title="Neuroscience"
              author="Leonardo Oliveira"
              lessons="10 Lessons"
              button="php"
              buttonColor="#9177F5"
              price="Rp 7.500.000,-"
              desc="
              Babastudio.com (Web Consultant & Training) telah berdiri lebih dari 10
              tahun sejak tahun 2003 dan telah dilengkapi badan hukum.
              Babastudio.com dalam pengalamannya telah merebut 5 penghargaan ICT
              Awards (Piala MENKOMINFO) dalam bidang website, sebagai website
              korporasi terbaik dan juga dalam kategory People Choice.
            "
            />
            <CourseDetail
              img={require("../images/image1.jpg")}
              title="Human Evolution"
              author="Joslin Rodgers"
              lessons="10 Lessons"
              button="react"
              buttonColor="#5C4CEB"
              price="Rp 7.500.000,-"
              desc="
              Babastudio.com (Web Consultant & Training) telah berdiri lebih dari 10
              tahun sejak tahun 2003 dan telah dilengkapi badan hukum.
              Babastudio.com dalam pengalamannya telah merebut 5 penghargaan ICT
              Awards (Piala MENKOMINFO) dalam bidang website, sebagai website
              korporasi terbaik dan juga dalam kategory People Choice.
            "
            />
            <CourseDetail
              img={require("../images/image2.jpg")}
              title="Genetic Models"
              author="Kita Chihoko"
              lessons="10 Lessons"
              button="music"
              buttonColor="#95D354"
              price="Rp 7.500.000,-"
              desc="
              Babastudio.com (Web Consultant & Training) telah berdiri lebih dari 10
              tahun sejak tahun 2003 dan telah dilengkapi badan hukum.
              Babastudio.com dalam pengalamannya telah merebut 5 penghargaan ICT
              Awards (Piala MENKOMINFO) dalam bidang website, sebagai website
              korporasi terbaik dan juga dalam kategory People Choice.
            "
            />
            <CourseDetail
              img={require("../images/image3.jpg")}
              title="Catalytic Conversions"
              author="Svyatoslav Taushev"
              lessons="10 Lessons"
              button="medicine"
              buttonColor="#603DBB"
              price="Rp 7.500.000,-"
              desc="
              Babastudio.com (Web Consultant & Training) telah berdiri lebih dari 10
              tahun sejak tahun 2003 dan telah dilengkapi badan hukum.
              Babastudio.com dalam pengalamannya telah merebut 5 penghargaan ICT
              Awards (Piala MENKOMINFO) dalam bidang website, sebagai website
              korporasi terbaik dan juga dalam kategory People Choice.
            "
            />
            <CourseDetail
              img={require("../images/image1.jpg")}
              title="Quantum Computers"
              author="Ivan Cornejo"
              lessons="10 Lessons"
              button="nodejs"
              buttonColor="red"
              price="Rp 7.500.000,-"
              desc="
              Babastudio.com (Web Consultant & Training) telah berdiri lebih dari 10
              tahun sejak tahun 2003 dan telah dilengkapi badan hukum.
              Babastudio.com dalam pengalamannya telah merebut 5 penghargaan ICT
              Awards (Piala MENKOMINFO) dalam bidang website, sebagai website
              korporasi terbaik dan juga dalam kategory People Choice.
            "
            />
          </Container>
        </Container>
      </Container>
    );
  }
}

export default CoursesDetail;
