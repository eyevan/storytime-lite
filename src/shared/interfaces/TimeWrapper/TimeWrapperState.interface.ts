import {Location} from "../Location/Location.interface";
import {Sort} from "../Sort/Sort.interface";

export interface TimeWrapperState {
  viewport: any,
  locations: Array<Location>,
  selectedLocation: Location | null
  activeSorting: Sort,
  activeFilter: string | null,
}
