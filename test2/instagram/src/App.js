import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import EditInstagram from "./components/edit-instagram.component";
import InstagramsList from "./components/instagrams-listing.component";
import CreateInstagram from "./components/create-instagram.component";
import DetailInstagram from "./components/detail-instagrams.component";

function App() {
  return (<Router>
    <div className="App">
       <Container>
       <Route exact path='/' component={InstagramsList} />
       <Route path="/instagrams-listing" component={InstagramsList} />
       <Route path="/detail-instagram" component={DetailInstagram} />
       <Route path="/create-instagram" component={CreateInstagram} />
       <Route path="/edit-instagram" component={EditInstagram} />
      </Container>
    </div>
  </Router>);
}

export default App;