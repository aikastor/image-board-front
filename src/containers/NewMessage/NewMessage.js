import React, {Component} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";

class RecipesForm extends Component {
  state = {
    author: '',
    image: null,
    message: '',
  };
  inputChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };
  fileChangeHandler = (e) => {
    this.setState({
      [e.target.name] : e.target.files[0]
    })
  };
  submitHandler = e => {
    e.preventDefault();

    const formData = new FormData();

    Object.keys(this.state).forEach(key => {
        formData.append(key, this.state[key])
    });

    console.log(formData, this.state, 'here');

    this.props.onSubmit(formData)
  };
  render() {
    return (
        <div>
          <Form onSubmit={this.submitHandler}>
            <FormGroup row>
              <Label for="author" sm={2}>Title</Label>
              <Col sm={10}>
                <Input type="text" name="author"
                       id="author" placeholder="Author"
                       value={this.state.author}
                       onChange={this.inputChangeHandler}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="image" sm={2}>Image</Label>
              <Col sm={10}>
                <Input type="file" name="image"
                       id="image"
                       onChange={this.fileChangeHandler}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="message" sm={2}>Image</Label>
              <Col sm={10}>
                <Input type="textarea" name="message"
                       id="description" required
                       value={this.state.message}
                       onChange={this.inputChangeHandler}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={{size: 10, offset: 2}}>
                <Button type="submit" color='primary'>Add</Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
    );
  }
}

export default RecipesForm;