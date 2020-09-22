import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import React, { Component } from 'react';
import { FeatureGroup, Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import { postCircularCoordinates, postPolygonCoordinates, postRectangularCoordinates } from '../../Connection';
import "../Component.css";
import Header from '../Header';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const center = [41.0082, 28.9784];  //istanbul
//const center = [39.9334, 32.8597]; //ankara
let data = [];

class MapComponent extends Component {

  constructor() {
    super();
    this.state = {
      markers: []
    };
  }

  addMarker = (data) => {
    const { markers } = this.state
    data.forEach(element =>
      markers.push({
        coords: [element.lat, element.lng],
        name: element.name
      }));
    this.setState({ markers })
  }

  _onCreated = (e) => {

    let type = e.layerType;
    let layer = e.layer;
    if (type === 'circle') {
      postCircularCoordinates(layer._latlng, layer._mRadius).then(data => {
        this.addMarker(data)
      });
    }
    else if (type === 'rectangle') {
      postRectangularCoordinates(layer._latlngs[0]);
    }
    else {
      postPolygonCoordinates(layer.editing.latlngs[0][0]);
    }
  }

  createMarker() {
    console.log('func ', data);
  }

  render() {
    return (
      <React.Fragment>
        <Header title="Social Map"></Header>
        <Map center={center} zoom={13} zoomControl={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />

          {this.state.markers.map((markerSpecs, idx) =>
            <Marker key={`marker-${idx}`} position={markerSpecs.coords}>
              <Popup>
                <span>{markerSpecs.name}</span>
              </Popup>
            </Marker>
          )}
          <FeatureGroup >
            <EditControl
              position='topleft'
              onCreated={this._onCreated}
              draw={{
                rectangle: false,
                marker: false,
                circlemarker: false,
                polygon: false,
                polyline: false
              }}
            />
          </FeatureGroup>
        </Map>
      </React.Fragment>

    );
  }
}

export default MapComponent;

