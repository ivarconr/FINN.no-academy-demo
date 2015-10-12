import * as actions from './candidateConstants';


export function candidatesSelected(candidates) {
  return {
    type: actions.CANDIDATES_SELECTED,
    candidates
  };
}


export function projectSelected(project) {
  return {
    type: actions.PROJECT_SELECTED,
    project
  };
}
