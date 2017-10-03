import { SELECT_ARTICLE, SELECT_DATES } from '../constants';

const defaultFilters = {
  selected: [],
  dateRange: {
    from: null,
    to: null,
  },
};

export default (filters = defaultFilters, action) => {
  const { type, payload } = action;

  switch (type) {
    case SELECT_ARTICLE:
      return { ...filters, selected: payload };

    case SELECT_DATES:
      return { ...filters, dateRange: payload };

    default: // nothing
  }

  return filters;
};
