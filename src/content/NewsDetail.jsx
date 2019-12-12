import React, { Component } from "react";

import { NewsProps } from "./News";
import { Typography, Container } from "@material-ui/core";
import "react-owl-carousel2/lib/styles.css";

const NewsPropsDetail = props => {
  return (
    <Container
      style={{
        display: "flex",
        borderRadius: "25px",
        flexWrap: "wrap",
        backgroundColor: "lightgrey",
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
        <NewsProps
          img={props.img}
          title={props.title}
          author={props.author}
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
          component="h2"
          variant="h2"
          style={{ color: "#EC9120", marginBottom: 30 }}
        >
          {props.title}
        </Typography>
        <Typography
          component="h3"
          variant="h5"
          style={{ marginBottom: 30, fontWeight: 500 }}
        >
          November, 28th
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
      </Container>
    </Container>
  );
};

class NewsDetail extends Component {
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
        <Container
          style={{
            backgroundColor: "#F1F0FF",
            borderBottomLeftRadius: "80%",
            width: "50%",
            height: "50%",
            position: "absolute",
            top: "180%",
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
            top: "240%",
            left: 0,
            zIndex: -1
          }}
        ></Container>
        <Container
          style={{
            backgroundColor: "#F1F0FF",
            borderBottomLeftRadius: "80%",
            width: "50%",
            height: "50%",
            position: "absolute",
            top: "340%",
            right: 0,
            zIndex: -1
          }}
        ></Container>
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
            News Detail
          </Typography>
          <Container
            fixed
            style={{
              height: "90%",
              marginTop: 20,
              width: "100%"
            }}
          >
            <NewsPropsDetail
              img={require("../images/b.png")}
              title="Bootstrap"
              lessons="10 Lessons"
              button="website"
              buttonColor="#50C4EE"
              price="Rp 7.500.000,-"
              desc="
              Kami Babastudio telah berdiri selama 15 tahun dengan 133 ribu murid dan alumni . Beberapa Pencapaian Babastudio
adalah:
1. Peraih Ratusan Penghargaan.
2. Termasuk 5 ICT Award dari Menkominfo

1. Mengenal Bootstrap

Pengenalan Bootstrap 
Apa Itu Bootstrap ? 
Download Dan Install Bootstrap 
2. Pengenalan Bootstrap Grid
Pengenalan Bootstrap CSS 
Sistem Grid Bootstrap 
Membuat System Grid Sederhana 
Membuat Layout Dinamis 
Membuat Form Sederhana 
Bootstrap Component
3. Pengenalan Bootstrap Component
Navigasi 
Jumbotron Dan Page Header 
Panel 
Media Object 
Thumbnail 
List Group 
Bootstrap JavaScript
Carousel 
4. Pengenalan Bootstrap JavaScript
Membuat Menu Dropdown dengan Bootstrap 
Penggunaan Modal dengan Bootstrap 
5. Bootstrap Project
Persiapan Project 
Membuat Index.html 
Membuat Artikel.html 
Membuat Kontak.html 
Finishing"
            />
            <NewsPropsDetail
              img={require("../images/html.png")}
              title="HTML"
              lessons="10 Lessons"
              button="HTML"
              buttonColor="#EE71C7"
              price="Rp 7.500.000,-"
              desc="
              Kami Babastudio telah berdiri selama 15 tahun dengan 133 ribu murid dan alumni . Beberapa Pencapaian Babastudio
adalah:
1. Peraih Ratusan Penghargaan.
2. Termasuk 5 ICT Award dari Menkominfo

Di Materi ini kamu akan mempelajari:

1. Mempelajari dasar-dasar dalam HTML :
 a. Hardware & Software yang di gunakan 
     b. Basic HTML
     c. Elemen Pada HTML
     d. Penggunaan Code Editor : Dreamweaver
     e. Membuat Comment di HTML

2. Mengenal CSS pada HTML 
     a. CSS Intoduction 
     b. CSS Implementation 
     c. CSS Selector
     d. Div Element 
     e. Div Element : Overflow 
     f. Membuat Simple Layout 
     g. Membuat Simple Layout : Content & Footer 
     h. Layout Two Columns

3. Membangun sebuah Corporate Website
     a. Basic Structure 
     b. Header 
     c. Content 
     d. Content Bottom Footer 

4. Menerapkan form didalam Website kamu 
     a. Membuat Form Part 1 & 2 
     b. CSS For Input Element 
     b.  CSS Another Input Element

5. Menerapkan plug-in untuk website kamu 
     a. Plug-in Introductions 
     b. Plug-in Image Slider 
     c. Plug-in Google Map 
     d. Plug-in Lightbox
     e. Plug-in Youtube 
            "
            />
            <NewsPropsDetail
              img={require("../images/ux.png")}
              title="UX"
              lessons="10 Lessons"
              button="UX"
              buttonColor="#9177F5"
              price="Rp 7.500.000,-"
              desc="
              Kami Babastudio telah berdiri selama 15 tahun dengan 133 ribu murid dan alumni . Beberapa Pencapaian Babastudio
adalah:
1. Peraih Ratusan Penghargaan.
2. Termasuk 5 ICT Award dari Menkominfo

Di Materi ini anda akan belajar tentang :


1. Konsep dalam User Experience

User Design Experience untuk Pemula
Metode UX
Prinsip UX
2. Desain User Experience
Pahami Usermu
Content Strategy
Persona
User Journey
3. Prototyping
Wireframing dan Annotation
Prototyping
            "
            />
            <NewsPropsDetail
              img={require("../images/laravel.png")}
              title="Laravel"
              lessons="10 Lessons"
              button="Web"
              buttonColor="#5C4CEB"
              price="Rp 7.500.000,-"
              desc="
              Kami Babastudio telah berdiri selama 15 tahun dengan 133 ribu murid dan alumni . Beberapa Pencapaian Babastudio
adalah:
1. Peraih Ratusan Penghargaan.
2. Termasuk 5 ICT Award dari Menkominfo

di materi anda akan diajarkan: 

1. Membuat Website sederhana dengan Menggunakan Laravel

Alasan Menggunakan Laravel 
System Requirements 
Instalasi Laravel 
Create Table 
Make Migration 
Make Model 
Make Controller 
Make View Home 
Make View Format 
Save And View Database 
Edit Data 
Delete Data 
Make Auth 
Create Homepage 
Make Show Blogs Data 
View Upload Image 
2. Membuat Website E-Commerce
Membuat Data Dinamis 
Shopping Cart 
Update Remove Cart 
Membuat Auth Login 
Checkout Save to Database 
Membuat Dashboard User 
Membuat Invoice 
Membuat Upload Konfirmasi Pembayaran Part 1 
Membuat Upload Konfirmasi Pembayaran Part 2 
Membuat Upload Konfirmasi Pembayaran Part 3 
Menbuat Admin Back End 
Manipulasi Data Product 
Membuat Table Akun Bank 
Membuat List Product
            "
            />
            <NewsPropsDetail
              img={require("../images/php.png")}
              title="PHP"
              lessons="10 Lessons"
              button="Web"
              buttonColor="#95D354"
              price="Rp 7.500.000,-"
              desc="
              Kami Babastudio telah berdiri selama 15 tahun dengan 133 ribu murid dan alumni . Beberapa Pencapaian Babastudio
adalah:
1. Peraih Ratusan Penghargaan.
2. Termasuk 5 ICT Award dari Menkominfo

Di Materi ini anda akan belajar tentang : 

1. Dasar- dasar pemograman PHP
2. Mengghubungkan Database MySQL dengan PHP 
3. Study Case membuat Web Company Profile beserta CMS 
4. Pengenalan tentang Function di PHP
            "
            />
            <NewsPropsDetail
              img={require("../images/ux.png")}
              title="UX"
              lessons="10 Lessons"
              button="Design"
              buttonColor="#603DBB"
              price="Rp 7.500.000,-"
              desc="
              Kami Babastudio telah berdiri selama 15 tahun dengan 133 ribu murid dan alumni . Beberapa Pencapaian Babastudio
adalah:
1. Peraih Ratusan Penghargaan.
2. Termasuk 5 ICT Award dari Menkominfo

Di Materi ini anda akan belajar tentang :


1. Konsep dalam User Experience

User Design Experience untuk Pemula
Metode UX
Prinsip UX
2. Desain User Experience
Pahami Usermu
Content Strategy
Persona
User Journey
3. Prototyping
Wireframing dan Annotation
Prototyping
            "
            />
            <NewsPropsDetail
              img={require("../images/xd.png")}
              title="XD"
              lessons="10 Lessons"
              button="Design"
              buttonColor="red"
              price="Rp 7.500.000,-"
              desc="
              Kami Babastudio telah berdiri selama 15 tahun dengan 133 ribu murid dan alumni . Beberapa Pencapaian Babastudio
adalah:
1. Peraih Ratusan Penghargaan.
2. Termasuk 5 ICT Award dari Menkominfo

Di Materi ini anda akan belajar tentang :

1. Wireframing Low Fidelity

Perkenalan dan Install Adobe XD 00:10:14
Pembuatan Desain Sederhana
Bekerja dengan Tipe pada Wireframe XD
Bagaimana cara membuat Tombol dan Form Checkbox pada Adobe XD
Website icon Gratis untuk Project UI dan UX
Menggunakan Prototyping untuk Menambahkan Aksi pada Rancangan
Rancangan Video yang dapat Dilihat Oleh Murid
Cara Memanfaatkam Simbol di Adobe XD
Menggunakan Repead Grid pada Adobe XD
Membuat Aplikasi Onboard di Adobe XD
Pembuatan Dashboard Pendaftaran Video Produksi
Berbagi Wireframes untuk komentar di Adobe XD

2. High Fidelity UI Design Cara membuat Kolom Grid pada Adobe XD
Bekerja menggunakan Pewarnaan di dalam XD
Menggunakan Font yang Baik untuk Rancangan Adobe XD
Menggunakan Character Style pada Adobe XD
Membuat Realistic Button
Bagaimana Cara membuat Icon Sendiri?
Membuat Gradient pada Adobe XD
Pro dan Kontra dalam Menambahkan Gambar pada Adobe XD
Merancang menggunakan Photoshop Illustrator pada Adobe XD
Bagaimana Cara membuat Mask pada Adobe XD
Menambahkan Teks Field pada Adobe XD
Membuat Repead Grid Baru
            "
            />
          </Container>
        </Container>
      </Container>
    );
  }
}

export default NewsDetail;
