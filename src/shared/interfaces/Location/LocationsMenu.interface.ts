import {Sort} from "../Sort/Sort.interface";

export interface LocationsMenuInterface {
  isRemovable?: boolean;
  title: string;
  value: Sort | string;
}
