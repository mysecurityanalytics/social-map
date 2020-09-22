import { Card, CardContent, Grid, TextField, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

export default function TweetCard(props) {
  const { post } = props;
  const [state, setState] = React.useState({
    place: ""
  });

  const handleChange = (event) => {
    const type = event.target.type;
    setState({
      ...state,
      [type]: event.target.value
    });
    localStorage.clear();
    localStorage.setItem('sourceType', 'tweet');
    localStorage.setItem('queryParam', event.target.value);
  };

  return (
    <Grid item xs={6}>
      <Card >
        <div >
          <CardContent>
            <Typography component="h2" align="center" variant="h5">
              {post.title}
            </Typography>
            <TextField label="Search Key" onChange={handleChange}></TextField>
          </CardContent>
        </div>
      </Card>
    </Grid>
  );
}

TweetCard.propTypes = {
  post: PropTypes.object,
};