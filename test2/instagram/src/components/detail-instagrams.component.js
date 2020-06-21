import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import InstagramTableRow from './InstagramTableRow';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import browserHistory from 'react-router';
import { Link } from 'react-router-dom';


export default class DetailInstagram extends Component {

  constructor(props) {
    super(props)
    this.state = {
      instagram: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/v1/getID/' + 10)
      .then(res => {
          console.log(res.data.data);
        this.setState({
          instagram: res.data.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.instagrams.map((res, i) => {
      return <InstagramTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (
    <div>
    <div  className="text-left my-3">
    <Button className="text-left" onClick={() => this.props.history.goBack()}>Back</Button>
    <Link className="edit-link ml-2" to={"/edit-instagram/"+15}>
              <Button variant="info">Edit</Button>
    </Link>
    </div>
    <div className="row mt-2">
    <div className="col-md-4">
    <Image src="https://via.placeholder.com/300.png/09f/fff" fluid />
    </div>
    <div className="col-md-8 text-left">
    <h1>Header</h1>
    <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
    </div>
    </div>
    </div>
    );
  }
}