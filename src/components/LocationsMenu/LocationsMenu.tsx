import React from "react";
import {LocationsMenuInterface} from "../../shared/interfaces/Location/LocationsMenu.interface";
import {Sort} from "../../shared/interfaces/Sort/Sort.interface";

class LocationsMenu extends React.Component<any> {
  /**
   * Check if this the button should have an active class
   *
   * @param value
   * @private
   */
  private isActive(value: Sort | string): boolean {
    return this.props.activeOption === value;
  }

  render() {
    return (
      <div>
        { this.props.options && this.props.options.map((option: LocationsMenuInterface) => (
          <button
            className={`btn btn-light mr-3 mb-3 ${this.isActive(option.value) ? 'active' : ''}`}
            onClick={() => this.props.onClick(option.value)}
          >
            {option.title}
            { (option.isRemovable && this.isActive(option.value)) && <span>&times;</span>}
          </button>
        )) }
      </div>
    )
  }
}

export default LocationsMenu;
