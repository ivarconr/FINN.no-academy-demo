import * as actions from './candidateConstants';


export function candidatesSelected(candidates) {
  return {
    type: actions.CANDIDATES_SELECTED,
    candidates
  };
}
