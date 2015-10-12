import * as actions from './candidateConstants';

const initialState = {

};

export default function reducer(state = initialState, action = {}) {

  switch (action.type) {
    case actions.CANDIDATES_SELECTED:
      return state;

    default:
      return state;
  }
}
