import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import InstagramsList from './instagrams-listing.component';
import Swal from 'sweetalert2';


export default class CreateInstagram extends Component {
      constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeInstagramTitle = this.onChangeInstagramTitle.bind(this);
    this.onChangeInstagramImage = this.onChangeInstagramImage.bind(this);
    this.onChangeInstagramDescription = this.onChangeInstagramDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      title: '',
      description: '',
      image: ''
    }
  }

  onChangeInstagramTitle(e) {
    this.setState({title: e.target.value})
  }

  onChangeInstagramImage(e) {
    this.setState({image: e.target.value})
  }

  onChangeInstagramDescription(e) {
    this.setState({description: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()
     const instagram = {
      title: this.state.title,
      image: this.state.image,
      description: this.state.description
    };
    axios.post('http://localhost:8080/api/v1/insertData/', instagram)
      .then(res => console.log(res.data));
    // console.log(`Instagram successfully created!`);
    // console.log(`Title: ${this.state.title}`);
    // console.log(`Image: ${this.state.image}`);
    // console.log(`Description: ${this.state.description}`);
    Swal.fire(
  'Good job!',
  'Instagram Added Successfully',
  'success'
)
    this.props.history.push('/Instagrams-listing')


    this.setState({title: '', image: '', description: ''})
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Row> 
            <Col>
             <Form.Group controlId="Title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" value={this.state.title} onChange={this.onChangeInstagramTitle}/>
             </Form.Group>
            
            </Col>
            
            <Col>
             <Form.Group controlId="Image">
                <Form.Label>Image</Form.Label>
                        <Form.Control type="number" value={this.state.image} onChange={this.onChangeInstagramImage}/>
             </Form.Group>
            </Col>  
           
        </Row>
            

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" type="textarea" value={this.state.description} onChange={this.onChangeInstagramDescription}/>
        </Form.Group>

       
        <Button variant="primary" size="lg" block="block" type="submit">
          Add Instagram
        </Button>
      </Form>
      <br></br>
      <br></br>

     
    </div>);
  }
}

