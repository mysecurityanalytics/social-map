import React from 'react';
import { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Grid, Container, Typography, Card, Button } from '@material-ui/core/';
import Header from '../Header';
import MainArea from './Main';
import TweetCard from './TweetCard';
import PlaceCard from './PlaceCard';

const mainPost = {
  title: 'Social Map',
  description: "Display Tweets or places on map",
  image: 'https://source.unsplash.com/AFB6S2kibuk',
  imgText: 'main image description'
};


const place ={
  title: 'Places',
  description: 'Select type'
}
  ;

const tweet ={
  title: 'Tweets',
  description: 'Select source'
}
  ;

const buttonStyle = {
  background: 'linear-gradient(-135deg, #7474bf 0%, #348ac7 100%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 50,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
}

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Container maxWidth="lg">
          <Header title="Social Map" />
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <MainArea post={mainPost} />
            </Grid>
            <Grid item xs={12}>
              <Card>
                <Typography align="center" variant="h5" color="primary">What do you want to see?</Typography>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={4}>
                <PlaceCard post={place}> </PlaceCard>
                <TweetCard post={tweet}></TweetCard>
              </Grid>
            </Grid>
            <Grid item xs={12} align="center">
              <Button style={buttonStyle} onClick={() => { this.props.history.push("/map"); }}>show on map </Button>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(Home);