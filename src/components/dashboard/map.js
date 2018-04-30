import React, { Component, Fragment } from 'react';
const mapboxgl = require('mapbox-gl');
import { buildMarker } from './issue-markers';
import { connect } from 'react-redux';
import { Loader } from '../common/Loader';

mapboxgl.accessToken  = 'pk.eyJ1IjoibmFuZ2Vsb3MiLCJhIjoiY2plenR5djF6MGluMDJ5bnZ4bGo4MDUzeSJ9.WskwCewN8JIs8j672FujoA';


class Map extends Component {

  state = {
    coords: [-87.67852, 41.895397],
    message: 'Finding Problems in your neighborhood',
    status: 'REQUEST'
  }


  getLocation = () => {
    if ('geolocation' in navigator){
      navigator.geolocation.getCurrentPosition(position =>
       {console.log(position);
        this.map = new mapboxgl.Map({
         container: this.mapContainer,
         center: [position.coords.longitude, position.coords.latitude],
         zoom: 12,
         style: 'mapbox://styles/mapbox/light-v9'
        })
        this.props.issues.forEach(issue => {
          buildMarker(issue).addTo(this.map)
        })
      return this.setState({status: 'SUCCESS', message: ''})
      },error =>
      {
        this.map = new mapboxgl.Map({
          container: this.mapContainer,
          center: this.state.coords,
          zoom: 12,
          style: 'mapbox://styles/mapbox/light-v9'
         })
         this.props.issues.forEach(issue => {
          buildMarker(issue).addTo(this.map)
        })
      return this.setState({status: 'SUCCESS', message: ''})
      })
    }
    else {
      this.map = new mapboxgl.Map({
        container: this.mapContainer,
        center: this.state.coords,
        zoom: 12,
        style: 'mapbox://styles/mapbox/light-v9'
       })
       this.props.issues.forEach(issue => {
        buildMarker(issue).addTo(this.map)
      })
      return this.setState({status: 'SUCCESS', message: ''})
    }
}

  componentDidMount(){
    this.getLocation()


    // this.map = new mapboxgl.Map({
    //   container: this.mapContainer,
    //   center: [-87.67852, 41.895397],
    //   zoom: 12,
    //   style: 'mapbox://styles/mapbox/light-v9'
    // })
    // this.props.issues.forEach(issue => {
    //   buildMarker(issue).addTo(this.map);
    // })
    // const myArray = [{type: 'pothole', longitude: -87.67852, latitude: 41.895397},
    // {type: 'streetlight', longitude: -87.57852, latitude: 41.895397}]
    // myArray.forEach(issue => {
    //   buildMarker(issue).addTo(this.map);
    // });
    // const marker = buildMarker({type: 'pothole', longitude: -87.67852, latitude: 41.895397})
    // marker.addTo(this.map);
  }

  componentWillUnmount(){
    this.map.remove();
  }

  render() {
    const { status, message } = this.state;
    console.log(status);
    return (
        <div>
          <h2 className="component-header">Map of Issues</h2>
          {status !== 'SUCCESS' && <Loader status={status} message={message} />}
          <div
          id="map-component"
          ref={el => this.mapContainer = el}/>
        </div>
      )
  }
}

export default Map;

// const mapState = (state) => ({
//     issues: state.issues,
//     users: state.users
// })

// const mapDispatch = null;

// export default connect(mapState, mapDispatch)(Map);

