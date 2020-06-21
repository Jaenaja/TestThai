import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Image from 'react-bootstrap/Image'
export default class InstagramTableRow extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.deleteInstagram = this.deleteInstagram.bind(this);
    }

    deleteInstagram() {
        axios.delete('http://localhost:8080/api/v1/deleteData/' + this.props.obj.id)
            .then((res) => {
                console.log('Instagram removed deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }
    render() {
        return (
                <div className="col-md-3">
                <Link className="edit-link" to={"/detail-instagram/" + this.props.obj.id}>
                <Image src="https://via.placeholder.com/300.png/09f/fff" fluid />
                </Link>                
                </div>
        );
    }
}