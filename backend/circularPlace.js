const axios = require('axios');
const formatDate = require('./formatDate');
const insertLog = require('./log');
var request_log;

const googleConfig = {
  baseUrl: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?',
  apiKey: process.env.GOOGLE_MAPS_API_KEY
}

axios.interceptors.request.use(
  config => {
    request_log = `${config.method.toUpperCase()} request sent to ${config.url} at ${formatDate(new Date())}`
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

function getCircularMapData(lat, lng, radius, type) {
  return new Promise(resolve => {
    //IMPORTANT: RADIUS MUST BE IN METERS 
    // RADIUS CAN BE AT MOST 50000 METERS
    axios.get(`${googleConfig.baseUrl}location=${lat},${lng}&radius=${radius}&type=${type}&key=${googleConfig.apiKey}`)
      .then(response => {
        console.log(2)
        placeArr = [];
        for (var i = 0; i < response.data.results.length; i++) {
          placeArr.push({
            name: response.data.results[i].name,
            lat: response.data.results[i].geometry.location.lat,
            lng: response.data.results[i].geometry.location.lng
          });
        }
        console.log(placeArr)
        insertLog(request_log, placeArr, true);
        resolve(placeArr);
      })
      .catch(error => {
        console.log(error);
        insertLog(request_log, error, false);
      });
  })

}

module.exports = function getCircularPlace(lat, lng, radius, type) {
  return getCircularMapData(lat, lng, radius, type);
}; 