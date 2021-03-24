import React, {ReactNode} from 'react';
import {Location} from "../../shared/interfaces/Location/Location.interface";
import './Timeline.scss'
import LocationsMenu from "../LocationsMenu/LocationsMenu";
import {FilterOptions, SortingOptions} from "./Timeline.config";

class Timeline extends React.Component<any> {
  /**
   * Filter the Locations by the country's name
   * @param locations
   * @private
   */
  private filterByCountryName(locations: Array<Location>): Array<Location> {
    if (!this.props.activeFilter) {
      return locations;
    }
    return locations.filter((location: Location) => location.country === this.props.activeFilter)
  }

  /**
   * Sort an array of Locations
   * @private
   */
  private sort(): Array<Location> {
    const sortBy = this.props.activeSort.sortBy !== 'asc';
    if (this.props.activeSort.type === 'country') {
      return this.sortByName(sortBy);
    }
    return this.sortByDate(sortBy);
  }

  /**
   * Sort an array of objects by name
   *
   * @param reverse a.k.a. descending
   * @private
   */
  private sortByName(reverse: boolean = false): Array<Location> {
    let result = this.props.locations.sort((first: Location, second: Location) =>
      this.compareLocaleStrings(first.city, second.city));

    if (reverse) {
      result.reverse();
    }

    return result;
  }

  /**
   * Sort an array of objects by date
   *
   * @param reverse a.k.a. descending
   * @private
   */
  private sortByDate(reverse: boolean = false): Array<Location> {
    let result = this.props.locations.sort((first: Location, second: Location) =>
      this.compareLocaleStrings(first.range.start.toString(), second.range.start.toString()));

    if (reverse) {
      result.reverse();
    }

    return result;
  }

  private compareLocaleStrings(a: string, b: string): number {
    return a.localeCompare(b);
  }

  render(): ReactNode {
    return (
      <div>
        <div className="row mb-4">
          <div className="col-6">
            <h3>Filter by:</h3>
            <LocationsMenu
              options={SortingOptions}
              activeOption={this.props.activeSort}
              onClick={this.props.onSort.bind(this)}
            />
          </div>
          <div className="col-6">
            <h3>Filter by:</h3>
            <LocationsMenu
              options={FilterOptions}
              activeOption={this.props.activeFilter}
              onClick={this.props.onFilter.bind(this)}
            />
          </div>
        </div>

        <div className="d-flex">
          <h3>Locations</h3>
          <small className="pl-2">(clickable)</small>
        </div>
        <ul className="list-group mb-4">
          { this.props.locations && this.filterByCountryName(this.sort()).map((location: Location) => {
            let className = 'list-group-item';

            if (this.props.selectedLocation && location.id === this.props.selectedLocation.id) {
              className += ' active disabled';
            }

            return (
              <li
                className={className}
                aria-current="true"
                onClick={() => this.props.onLocationClick(location)}
                key={`timeline-${location.id}`}
              >
                  { `${location.city}, ${location.country}. Lived here from ${location.range.start} to ${location.range.end}` }
                  { location.id === 1 ? `. Then again from 2008 isInRangeto 2015.` : null}
              </li>
            );
          }) }
        </ul>
      </div>
    );
  }
}

export default Timeline;
