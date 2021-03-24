import {CoordinatesInterface} from "../Coordinates/Coordinates.interface";
import {Range} from "../Range/Range.interface";

export interface Location {
  id: number,
  city: string;
  country: string;
  description: string;
  range: Range;
  coordinates: CoordinatesInterface;
}
