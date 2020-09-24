import Axios from 'axios';

function postRectangularCoordinates(coordinates) {
    return new Promise(resolve => {
        Axios.post('http://localhost:5000/rectangular_coordinates', {
            coordinates: coordinates
        }).then(res => {
            console.log(res)
            resolve(res);
        }).catch(err => console.error(err));
    });
}

function postCircularCoordinates(point, radius) {
    return new Promise(resolve => {
        var sourceType = localStorage.getItem('sourceType');
        var queryParam = localStorage.getItem('queryParam');
        console.log(sourceType)
        Axios.post('http://localhost:5000/circular_coordinates', {
            sourceType: sourceType,
            queryParam: queryParam,
            point: point,
            radius: radius
        }).then(res => {
            resolve(res.data);
        }).catch(err => console.error(err));
    });
}

function postPolygonCoordinates(coordinates) {
    return new Promise(resolve => {
        Axios.post('http://localhost:5000/polygon_coordinates', {
            coordinates: coordinates
        }).then(res => {
            console.log(res)
            resolve(res);
        }).catch(err => console.error(err));
    });
}

export { postRectangularCoordinates, postCircularCoordinates, postPolygonCoordinates }