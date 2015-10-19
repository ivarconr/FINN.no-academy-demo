import * as actions from './candidateConstants';


export function candidatesSelected() {
  return {
    type: actions.CANDIDATES_SELECTED
  };
}

export function candidateAdd(candidate) {
  return {
    type: actions.CANDIDATE_ADD,
    candidate
  };
}

export function candidateRemove(candidate) {
  return {
    type: actions.CANDIDATE_REMOVE,
    candidate
  };
}


export function projectSelected(project) {
  return {
    type: actions.PROJECT_SELECTED,
    project
  };
}
