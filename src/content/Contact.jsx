import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "../styles/styles.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact-wrapper">
        <div className="contact-layout">
          <h2>Pusat Bantuan</h2>
          <div className="contact-card-wrapper">
            <div className="contact-card-1">
              <div className="contact-card-1-content">
                <h3>Customer Service - <b style={{fontSize: "16px", color: "#ECC968"}}>Mamabantu</b></h3>
                <p>
                  Anda memiliki pertanyaan seputar layanan studiokoding tanyakan
                  langsung ke <b style={{fontSize: "16px", color: "#ECC968"}}>Mamabantu</b> - studiokoding Virtual Assistant. <b style={{fontSize: "16px", color: "#ECC968"}}>Mamabantu</b> siap
                  membantu Anda menemukan solusi dari berbagai jenis bantuan
                  seputar studiokoding
                </p>
                <button>
                  <Link to="/">Tanya <b style={{fontSize: "16px", color: "#ECC968"}}>Mamabantu</b></Link>
                </button>
              </div>
            </div>
            <div className="contact-card-2">
              <h3>Hubungi Kami</h3>
              <div className="contact-card-2-content">
                <ul>
                  <li>Contact Center 147</li>
                  <hr />
                  <li>Email</li>
                  <hr />
                  <li>Plaza Telkom</li>
                  <hr />
                </ul>
              </div>
            </div>
            <div className="contact-card-3">
              <div className="contact-card-3-content">
                <h3>Mamapedia</h3>
                <p>
                  Temukan semua hal tentang layanan studiokoding dan pertanyaan
                  populer di sini.
                </p>
                <button>
                  <Link to="/">Lihat</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
