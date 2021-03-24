import {Location} from "../location/location.interface";
import {Sort} from "../sort/sort.interface";

export interface TimeWrapperState {
  viewport: any,
  locations: Array<Location>,
  selectedLocation: Location | null
  activeSorting: Sort,
  activeFilter: string | null,
}
