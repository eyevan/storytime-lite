import React, {ReactNode} from 'react';
import {Location} from "../../shared/interfaces/location/location.interface";
import './Timeline.scss'
import {Sort} from "../../shared/interfaces/sort/sort.interface";

class Timeline extends React.Component<any> {

  /**
   * Filter the locations by the country's name
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
   * Sort an array of locations
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

  /**
   * Check if this the button should have an active class
   *
   * @param sort
   * @private
   */
  private isActiveSort(sort: Sort): string {
    return sort.type === this.props.activeSort.type && sort.sortBy === this.props.activeSort.sortBy ? 'active' : '';
  }

  /**
   * Check if this the button should have an active class
   *
   * @param filter
   * @private
   */
  private isFilterActive(filter: string): boolean {
    return filter === this.props.activeFilter;
  }

  render(): ReactNode {
    return (
      <div>
        <div className="row mb-4">
          <div className="col-6">
            <h3>Sort by:</h3>
            <div>
              <button
                className={`btn btn-light mr-3 ${this.isActiveSort({type: 'country', sortBy:'asc'})}`}
                onClick={() => this.props.onSort({type: 'country', sortBy:'asc'})}
              >
                Name (asc)
              </button>
              <button
                className={`btn btn-light mr-3 ${this.isActiveSort({type: 'country', sortBy:'desc'})}`}
                onClick={() => this.props.onSort({type: 'country', sortBy:'desc'})}
              >
                Name (desc)
              </button>
              <button
                className={`btn btn-light mr-3 ${this.isActiveSort({type: 'date', sortBy:'asc'})}`}
                onClick={() => this.props.onSort({type: 'date', sortBy:'asc'})}
              >
                Date (asc)
              </button>
              <button
                className={`btn btn-light ${this.isActiveSort({type: 'date', sortBy:'desc'})}`}
                onClick={() => this.props.onSort({type: 'date', sortBy:'desc'})}
              >
                Date (desc)
              </button>
            </div>
          </div>
          <div className="col-6">
            <h3>Filter by:</h3>
            <div>
              <button
                className={`btn btn-light mr-3 ${this.isFilterActive('Bulgaria') ? 'active' : ''}`}
                onClick={() => this.props.onFilter('Bulgaria')}
              >
                Bulgaria
                {this.isFilterActive('Bulgaria') && <span>&times;</span>}
              </button>
              <button
                className={`btn btn-light mr-3 ${this.isFilterActive('Spain') ? 'active' : ''}`}
                onClick={() => this.props.onFilter('Spain')}
              >
                Spain
                {this.isFilterActive('Spain') && <span>&times;</span>}
              </button>
            </div>
          </div>
        </div>

        <ul className="list-group mb-4">
          { this.props.locations && this.filterByCountryName(this.sort()).map((location: Location) => {
            let className = 'list-group-item';

            if (this.props.selectedLocation && location.id === this.props.selectedLocation.id) {
              className += ' active';
            }

            return (
              <li
                className={className}
                aria-current="true"
                onClick={() => this.props.onLocationClick(location)}
                key={`timeline-${location.id}`}
              >
                  { `${location.city}, ${location.country}` }
              </li>
            );
          }) }
        </ul>
      </div>
    );
  }
}

export default Timeline;
