import React, {ReactNode} from "react";
import {FlyToInterpolator, ViewportProps} from 'react-map-gl';

import Map from "../Map/Map";
import {locations} from "../../shared/data/locations/locations.object";
import Timeline from "../Timeline/Timeline";
import {Sort} from "../../shared/interfaces/sort/sort.interface";
import {Location} from "../../shared/interfaces/location/location.interface";
import {TimeWrapperState} from "../../shared/interfaces/TimeWrapper/TimeWrapperState.interface";

class TimelineWrapper extends React.Component<{}, TimeWrapperState> {
  constructor(props: any) {
    super(props);

    this.state = {
      viewport: {
        latitude: locations[0].coordinates.lat,
        longitude: locations[0].coordinates.long,
        width: '100%',
        height: '700px',
        zoom: 12
      },
      locations,
      activeSorting: {
        type: 'date',
        sortBy: 'asc'
      },
      activeFilter: null,
      selectedLocation: locations[0],
    };
  }

  /**
   * Invoked when clicking on a marker
   *
   * @param e Click event
   * @param location Location selected
   * @private
   */
  private onMarkerClick(e: Event, location: Location): void {
    e.preventDefault();
    this.setSelectedLocation(location)
  }

  /**
   * Set the new destination's viewport
   *
   * @param viewport New viewport
   * @private
   */
  private setViewport(viewport: ViewportProps): void {
    this.setState((state) => ({
      ...state,
      viewport
    }))
  }

  /**
   * Set the current location to the state
   *
   * @param location
   * @private
   */
  private setSelectedLocation(location: Location | null): void {
    this.setState((state) => ({
      ...state,
      selectedLocation: location
    }))
  }

  /**
   * Check if a location is in range.
   *
   * @param mark
   * @param location
   * @private
   */
  private isInRange(mark: number, location: Location): boolean {
    console.log('mark range', {
      mark,
      start: location.range.start,
      end: location.range.end
    })
    return mark >= location.range.start && mark <= location.range.end
  }

  /**
   * "Fly" to the selected destination
   *
   * @param location Location to fly to
   * @private
   */
  private travelTo(location: Location): void {
    this.setSelectedLocation(null);
    setTimeout(() => this.setSelectedLocation(location), 1200);

    this.setViewport({
      latitude: location.coordinates.lat,
      longitude: location.coordinates.long,
      zoom: 12,
      transitionDuration: 1500,
      transitionInterpolator: new FlyToInterpolator()
    })
  }

  /**
   * Invoked on the change of the sorting
   *
   * @param sort Sort
   * @private
   */
  private onSortingChange(sort: Sort): void {
    this.setState((state) => ({
      ...state,
      activeSorting: sort
    }));
  }

  /**
   * Invoked when applying a filter
   *
   * @param filterBy
   * @private
   */
  private onFilterChange(filterBy: string): void {
    this.setState((state) => ({
      ...state,
      activeFilter: filterBy !== state.activeFilter ? filterBy : null
    }))
  }

  render(): ReactNode {
    return (
      <div className="TimelineWrapper py-5">
        <div className="container">
          <Timeline
            locations={this.state.locations}
            selectedLocation={this.state.selectedLocation}
            activeSort={this.state.activeSorting}
            activeFilter={this.state.activeFilter}
            onLocationClick={this.travelTo.bind(this)}
            onSort={this.onSortingChange.bind(this)}
            onFilter={this.onFilterChange.bind(this)}
          />
          <Map
            locations={this.state.locations}
            viewport={this.state.viewport}
            selectedLocation={this.state.selectedLocation}
            onViewportChange={this.setViewport.bind(this)}
            onMarkerClick={this.onMarkerClick.bind(this)}
          />
        </div>
      </div>
    )
  }
}

export default TimelineWrapper;
