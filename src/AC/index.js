import {
  DELETE_ARTICLE,
  INCREMENT,
  RESET,
  SELECT_ARTICLE,
  PICK_DATES,
} from '../constants';

export const deleteArticle = id =>
  ({
    type: DELETE_ARTICLE,
    payload: { id },
  });

export const increment = () =>
  ({
    type: INCREMENT,
  });

export const reset = () =>
  ({
    type: RESET,
  });

export const selectArticle = selected =>
  ({
    type: SELECT_ARTICLE,
    payload: selected,
  });

export const pickDates = range =>
  ({
    type: PICK_DATES,
    payload: range,
  });
