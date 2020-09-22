import { Card, CardContent, FormControl, Grid, InputLabel, Select, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';


const validPlaceTypes = ["accounting", "airport", "amusement_park", "aquarium", "art_gallery", "atm", "bakery", "bank", "bar", "beauty_salon", "bicycle_store", "book_store", "bowling_alley", "bus_station", "cafe", "campground", "car_dealer", "car_rental", "car_repair", "car_wash", "casino", "cemetery", "church", "city_hall", "clothing_store", "convenience_store", "courthouse", "dentist", "department_store", "doctor", "drugstore", "electrician", "electronics_store", "embassy", "fire_station", "florist", "funeral_home", "furniture_store", "gas_station", "gym", "hair_care", "hardware_store", "hindu_temple", "home_goods_store", "hospital", "insurance_agency", "jewelry_store", "laundry", "<ul>", "lawyer", "library", "light_rail_station", "liquor_store", "local_government_office", "locksmith", "lodging", "meal_delivery", "meal_takeaway", "mosque", "movie_rental", "movie_theater", "moving_company", "museum", "night_club", "painter", "park", "parking", "pet_store", "pharmacy", "physiotherapist", "plumber", "police", "post_office", "primary_school", "real_estate_agency", "restaurant", "roofing_contractor", "rv_park", "school", "secondary_school", "shoe_store", "shopping_mall", "spa", "stadium", "storage", "store", "subway_station", "supermarket", "synagogue", "taxi_stand", "tourist_attraction", "train_station", "transit_station", "travel_agency", "university", "veterinary_care", "zoo"];


export default function PlaceCard(props) {
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
    localStorage.setItem('sourceType', 'google_place');
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
            <FormControl align="center" fullWidth >
              <InputLabel align="center" id="type">{post.description}</InputLabel>
              <Select
                autoWidth
                native
                value={state.age}
                onChange={handleChange}
                inputProps={{
                  type: "place",
                  labelid: "place-native-simple"
                }}>
                <option aria-label="None" value="" />
                {validPlaceTypes.map((placeType) => (
                  <option key={placeType} value={placeType}>{placeType}</option>
                ))}
              </Select>
            </FormControl>
          </CardContent>
        </div>
      </Card>
    </Grid>
  );
}

PlaceCard.propTypes = {
  post: PropTypes.object,
};