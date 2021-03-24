import {Coordinates} from "../geoData/geoData.interface";
import {Range} from "../range/range.interface";

export interface Location {
  id: number,
  city: string;
  country: string;
  description: string;
  range: Range;
  coordinates: Coordinates;
}
