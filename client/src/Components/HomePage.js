import React from 'react';
import { Jumbotron, Button, Media, Container } from 'reactstrap';
import PuppyLogo from '../images/puppygoggles.jpg'

const Home = (props) => {
  return (
    <div>
      <Jumbotron>
        <Media style={{ width: "100%" }} src={PuppyLogo}></Media>
        <h1 className="display-3">Welcome to PuppyGoggles!</h1>
        <hr className="my-2" />
        <p>Wheather you have lost your puppy or found a lost puppy we can help you connect the dogs!</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Home;