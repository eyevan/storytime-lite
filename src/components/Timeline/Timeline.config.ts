import {LocationsMenuInterface} from "../../shared/interfaces/Location/LocationsMenu.interface";

export const SortingOptions: Array<LocationsMenuInterface> = [
  {
    title: 'Location\'s name (asc)',
    value: {type: 'country', sortBy:'asc'}
  },
  {
    title: 'Location\'s name (desc)',
    value: {type: 'country', sortBy:'desc'}
  },
  {
    title: 'Date (asc)',
    value: {type: 'date', sortBy:'asc'}
  },
  {
    title: 'Date (desc)',
    value: {type: 'date', sortBy:'desc'}
  },
];
export const FilterOptions: Array<LocationsMenuInterface> = [
  {
    title: 'Bulgaria',
    value: 'Bulgaria',
    isRemovable: true
  },
  {
    title: 'Spain',
    value: 'Spain',
    isRemovable: true
  }
];
