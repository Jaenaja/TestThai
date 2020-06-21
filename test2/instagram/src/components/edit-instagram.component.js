import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditInstagram extends Component {

  constructor(props) {
    super(props)
    console.log(this.props);
    this.onChangeInstagramTitle = this.onChangeInstagramTitle.bind(this);
    this.onChangeInstagramImage = this.onChangeInstagramImage.bind(this);
    this.onChangeInstagramDescription = this.onChangeInstagramDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      id : '',
      title: '',
      image: '',
      description: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/v1/getID/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          title: res.data.title,
          image: res.data.image,
          description: res.data.description
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeInstagramTitle(e) {
    this.setState({ title: e.target.value })
  }

  onChangeInstagramImage(e) {
    this.setState({ image: e.target.value })
  }

  onChangeInstagramDescription(e) {
    this.setState({ description: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const instagramObject = {
      id: this.state.id,
      title: this.state.title,
      image: this.state.image,
      description: this.state.description
    };

    axios.put('http://localhost:8080/api/v1/updateData/' + this.state.id, instagramObject)
      .then((res) => {
        console.log(res.data)
        console.log('Instagram successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Instagram List 
    this.props.history.push('/Instagrams-listing')
  }


  render() {
    return (<div className="form-wrapper">
        <div className="text-left mt-3">
        <Button className="text-left" onClick={() => this.props.history.goBack()}>Back</Button>
        </div>
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={this.state.title} onChange={this.onChangeInstagramTitle} />
        </Form.Group>

        <Form.Group controlId="Image">
          <Form.Label>Image</Form.Label>
          <Form.Control type="number" value={this.state.image} onChange={this.onChangeInstagramImage} />
        </Form.Group>

        <Form.Group controlId="Description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" value={this.state.description} onChange={this.onChangeInstagramDescription} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Instagram
        </Button>
      </Form>
    </div>);
  }
}