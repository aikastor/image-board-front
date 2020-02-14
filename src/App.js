import React, {Component} from 'react';
import {Card, CardBody, CardText, CardTitle, Container, Nav, Navbar, NavbarBrand} from "reactstrap";
import {NavLink as RouterNavLink} from 'react-router-dom';
import NewMessage from "./containers/NewMessage/NewMessage";
import {createMessage, fetchMessages} from "./store/actions/messagesActions";
import {connect} from "react-redux";
import ImageThumbnail from "./components/MessageImage/MessageImage";

class App extends Component {

  componentDidMount() {
    this.props.fetchMessages()
  }

  createMessageHandler = async formData => {
    await this.props.createMessage(formData);
    this.props.fetchMessages()
  };

  render () {
    return (
        <>
          <Navbar color="dark" dark expand="md">
            <NavbarBrand tag={RouterNavLink} to='/'>Messages</NavbarBrand>
            <Nav className="mr-auto" navbar></Nav>
          </Navbar>
          <Container>
            {
              this.props.messages &&
              this.props.messages.map(item => (
                  <Card key={item.id}>
                    <CardBody>
                      <CardTitle>
                        <h6>Author: {item.author? item.author : <i> Anonymous author</i>}</h6>
                      </CardTitle>
                      {item.image !== 'null' ?
                          <ImageThumbnail image={item.image}/>: null
                      }
                      <CardText>
                        {item.message ? item.message : ''}
                      </CardText>
                    </CardBody>
                  </Card>
              ))
            }
            <NewMessage
                onSubmit={this.createMessageHandler}
            />
          </Container>

        </>
    );
  }

};
const mapStateToProps = state => ({
  messages : state.messages,
});

const mapDispatchToProps = dispatch => ({
  createMessage: (messageData) => dispatch(createMessage(messageData)),
  fetchMessages: ()=> dispatch(fetchMessages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);