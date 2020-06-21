import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import InstagramTableRow from './InstagramTableRow';
import Button from 'react-bootstrap/Button';


export default class InstagramList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      instagrams: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/v1/getAll/')
      .then(res => {
          console.log(res.data.data);
        this.setState({
          instagrams: res.data.data
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
    <Link className="edit-link" to={"/create-instagram/"}>
              <Button variant="info">Create</Button>
    </Link>
    </div>
    <div className="row mt-2">
            {this.DataTable()}
    </div>
    </div>
    );
  }
}