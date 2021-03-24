import React from "react";
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import parse from 'html-react-parser';
import {Location} from "../../shared/interfaces/location/location.interface";

class Map extends React.Component<any> {
  parsedData = parse(this.props.selectedLocation?.description);

  render() {
    return <ReactMapGL
      {...this.props.viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mreyevan/ckmmiaece2aqo17o0rykysqbo"
      onViewportChange={(viewport: any) => this.props.onViewportChange(viewport)}
    >

      {this.props.locations.map((location: Location) => (
        <Marker
          key={location.id}
          latitude={location.coordinates.lat}
          longitude={location.coordinates.long}
          offsetTop={-24}
          offsetLeft={-12}
        >
          <button
            className="btn btn-marker"
            onClick={(e: any) => this.props.onMarkerClick(e, location)}
          >
            <img src="/images/marker.svg" alt="Marker pin" className="img-fluid"/>
          </button>
        </Marker>
      ))}

      {this.props.selectedLocation && (
        <Popup
          latitude={this.props.selectedLocation?.coordinates.lat}
          longitude={this.props.selectedLocation?.coordinates.long}
          closeButton={false}
        >
          <div>
            <h2>
              {`${this.props.selectedLocation?.city}, ${this.props.selectedLocation?.country}`}
            </h2>
            <div>
              { this.parsedData }
            </div>
          </div>
        </Popup>
      )}

    </ReactMapGL>
  }
}

export default Map;
