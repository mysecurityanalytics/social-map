const axios = require('axios');
const formatDate = require('./formatDate');
const insertLog = require('./log');
var request_log;

const twitterConfig = {
    baseUrl: 'https://api.twitter.com/1.1/search/tweets.json?',
    authorization: process.env.TWITTER_AUTH
};

axios.interceptors.request.use(
    config => {
        request_log = `${config.method.toUpperCase()} request sent to ${config.url} at ${formatDate(new Date())}`
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

function getTweets(lat, lng, radius, query) {
    return new Promise(resolve => {
        radius_km = radius / 1000;
        var config = {
            method: 'get',
            url: `${twitterConfig.baseUrl}q=${query}&geocode=${lat},${lng},${radius_km}km`,
            headers: {
                'Authorization': `Bearer ${twitterConfig.authorization}`
            }
        };
        axios(config)
            .then(response => {
                tweetArr = [];
                for (i = 0; i < response.data.statuses.length; i++) {
                    var tweet = response.data.statuses[i];
                    if (tweet.coordinates != null) {
                        tweetArr.push({
                            name: tweet.text,
                            lat: tweet.coordinates.coordinates[1],
                            lng: tweet.coordinates.coordinates[0]
                        });
                    }
                }
                console.log(tweetArr)
                insertLog(request_log, tweetArr, true);
                resolve(tweetArr);
            })
            .catch(error => {
                console.log(error);
                insertLog(request_log, error, false);
            });
    });
}


module.exports = function getCircularTweet(lat, lng, radius, query) {
    return getTweets(lat, lng, radius, query);
}; 